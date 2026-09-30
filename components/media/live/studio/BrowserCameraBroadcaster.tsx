'use client';

import {
  Camera,
  CameraOff,
  Loader2,
  Mic,
  MicOff,
  Radio,
  Square,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import type { LiveBroadcastSession } from '@/lib/live/types';

type BrowserCameraBroadcasterProps = {
  broadcast: LiveBroadcastSession;
  onBroadcastUpdated?: (
    broadcast: LiveBroadcastSession,
  ) => void;
};

type BroadcastState =
  | 'idle'
  | 'requesting-media'
  | 'ready'
  | 'connecting'
  | 'live'
  | 'stopping'
  | 'ended'
  | 'error';

export default function BrowserCameraBroadcaster({
  broadcast,
  onBroadcastUpdated,
}: BrowserCameraBroadcasterProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef =
    useRef<RTCPeerConnection | null>(null);

  const [state, setState] =
    useState<BroadcastState>('idle');

  const [error, setError] = useState('');

  const [cameraEnabled, setCameraEnabled] =
    useState(true);

  const [microphoneEnabled, setMicrophoneEnabled] =
    useState(true);

  const [speakerEnabled, setSpeakerEnabled] =
    useState(true);

  const [elapsedSeconds, setElapsedSeconds] =
    useState(0);

  const canBroadcast =
    Boolean(broadcast.ingestUrl) &&
    broadcast.ingestMethod === 'browser';

  useEffect(() => {
    return () => {
      stopLocalMedia();
    };
  }, []);

  useEffect(() => {
    if (state !== 'live') {
      return;
    }

    const timer = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [state]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !speakerEnabled;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser autoplay restrictions are handled by
        // the user's interaction with the Studio controls.
      });
    }
  }, [speakerEnabled]);

  function stopLocalMedia() {
    mediaStreamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());

    mediaStreamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  function closePeerConnection() {
    peerConnectionRef.current
      ?.getSenders()
      .forEach((sender) => {
        sender.track?.stop();
      });

    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;
  }

  function formatElapsedTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(
      (seconds % 3600) / 60,
    );
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return [
        hours,
        minutes.toString().padStart(2, '0'),
        remainingSeconds.toString().padStart(2, '0'),
      ].join(':');
    }

    return [
      minutes.toString().padStart(2, '0'),
      remainingSeconds.toString().padStart(2, '0'),
    ].join(':');
  }

  async function prepareCamera() {
    if (!canBroadcast) {
      setError(
        'This broadcast does not have a browser camera ingest endpoint.',
      );
      setState('error');
      return;
    }

    setError('');
    setState('requesting-media');

    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            width: {
              ideal: 1920,
            },
            height: {
              ideal: 1080,
            },
            facingMode: 'user',
          },
          audio: true,
        });

      mediaStreamRef.current = stream;

      const videoTracks = stream.getVideoTracks();
      const audioTracks = stream.getAudioTracks();

      setCameraEnabled(
        videoTracks.some(
          (track) => track.enabled,
        ),
      );

      setMicrophoneEnabled(
        audioTracks.some(
          (track) => track.enabled,
        ),
      );

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        await videoRef.current.play();
      }

      setState('ready');
    } catch (mediaError) {
      setError(
        mediaError instanceof DOMException &&
          mediaError.name === 'NotAllowedError'
          ? 'Camera and microphone access was denied. Allow access in your browser and try again.'
          : mediaError instanceof DOMException &&
              mediaError.name === 'NotFoundError'
            ? 'No camera or microphone was found on this device.'
            : mediaError instanceof Error
              ? mediaError.message
              : 'Unable to access the camera and microphone.',
      );

      stopLocalMedia();
      setState('error');
    }
  }

  async function startBroadcast() {
    const stream = mediaStreamRef.current;
    const whipUrl = broadcast.ingestUrl;

    if (!stream || !whipUrl) {
      setError(
        'Prepare the camera before starting the broadcast.',
      );
      setState('error');
      return;
    }

    setError('');
    setState('connecting');

    try {
      const peerConnection =
        new RTCPeerConnection();

      peerConnectionRef.current = peerConnection;

      stream.getTracks().forEach((track) => {
        peerConnection.addTransceiver(track, {
          direction: 'sendonly',
        });
      });

      const offer =
        await peerConnection.createOffer();

      await peerConnection.setLocalDescription(
        offer,
      );

      if (!peerConnection.localDescription) {
        throw new Error(
          'The browser did not produce a WebRTC offer.',
        );
      }

      const response = await fetch(whipUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sdp',
        },
        body: peerConnection.localDescription.sdp,
      });

      if (!response.ok) {
        const responseText =
          await response.text();

        throw new Error(
          responseText ||
            `Cloudflare rejected the broadcast connection (${response.status}).`,
        );
      }

      const answerSdp =
        await response.text();

      await peerConnection.setRemoteDescription({
        type: 'answer',
        sdp: answerSdp,
      });

      setElapsedSeconds(0);
      setState('live');

      onBroadcastUpdated?.({
        ...broadcast,
        status: 'live',
        startedAt: new Date().toISOString(),
      });
    } catch (broadcastError) {
      closePeerConnection();

      setError(
        broadcastError instanceof Error
          ? broadcastError.message
          : 'Unable to start the live broadcast.',
      );

      setState('error');
    }
  }

  async function stopBroadcast() {
    setState('stopping');
    setError('');

    closePeerConnection();
    stopLocalMedia();

    try {
      const response = await fetch(
        `/api/live/broadcasts/${broadcast.id}/end`,
        {
          method: 'POST',
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            'The broadcast ended locally, but the server could not update its status.',
        );
      }

      onBroadcastUpdated?.(data.broadcast);

      setState('ended');
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to finish the broadcast cleanly.',
      );

      setState('ended');
    }
  }

  function toggleCamera() {
    const tracks =
      mediaStreamRef.current?.getVideoTracks() ??
      [];

    const nextEnabled = !cameraEnabled;

    tracks.forEach((track) => {
      track.enabled = nextEnabled;
    });

    setCameraEnabled(nextEnabled);
  }

  function toggleMicrophone() {
    const tracks =
      mediaStreamRef.current?.getAudioTracks() ??
      [];

    const nextEnabled =
      !microphoneEnabled;

    tracks.forEach((track) => {
      track.enabled = nextEnabled;
    });

    setMicrophoneEnabled(nextEnabled);
  }

  function toggleSpeaker() {
    setSpeakerEnabled(
      (current) => !current,
    );
  }

  if (!canBroadcast) {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900">
          Browser camera is not available for this broadcast.
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          Create the broadcast with Browser Camera selected,
          then return to the broadcaster.
        </p>
      </div>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-[#050A30]/10 bg-[#050A30] text-white shadow-sm">
      <div className="border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Browser broadcaster
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {broadcast.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {state === 'live' ? (
              <>
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500" />

                <span className="text-sm font-semibold text-red-300">
                  LIVE
                </span>

                <span className="text-sm text-white/50">
                  {formatElapsedTime(
                    elapsedSeconds,
                  )}
                </span>
              </>
            ) : (
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {state === 'ended'
                  ? 'Ended'
                  : 'Studio ready'}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover"
            />

            {!mediaStreamRef.current ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#050A30] via-[#10194D] to-[#050A30] px-6 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                    <Camera
                      size={30}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-5 text-lg font-semibold">
                    Camera preview
                  </p>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                    Prepare your camera and microphone before
                    starting the broadcast.
                  </p>
                </div>
              </div>
            ) : null}

            {state === 'connecting' ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/65 backdrop-blur-sm">
                <div className="text-center">
                  <Loader2
                    size={30}
                    className="mx-auto animate-spin text-cyan-300"
                    aria-hidden="true"
                  />

                  <p className="mt-4 font-semibold">
                    Connecting to Nexus Hub Live…
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    Establishing the live broadcast connection.
                  </p>
                </div>
              </div>
            ) : null}

            {state === 'live' ? (
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg">
                <Radio
                  size={13}
                  aria-hidden="true"
                />
                Live
              </div>
            ) : null}
          </div>

          {error ? (
            <div className="mt-4 rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200">
              {error}
            </div>
          ) : null}
        </div>

        <aside className="flex flex-col">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Studio controls
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={toggleCamera}
                disabled={
                  !mediaStreamRef.current ||
                  state === 'connecting' ||
                  state === 'stopping' ||
                  state === 'ended'
                }
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={
                  cameraEnabled
                    ? 'Turn camera off'
                    : 'Turn camera on'
                }
              >
                {cameraEnabled ? (
                  <Camera
                    size={20}
                    aria-hidden="true"
                  />
                ) : (
                  <CameraOff
                    size={20}
                    aria-hidden="true"
                  />
                )}

                <span className="text-xs">
                  Camera
                </span>
              </button>

              <button
                type="button"
                onClick={toggleMicrophone}
                disabled={
                  !mediaStreamRef.current ||
                  state === 'connecting' ||
                  state === 'stopping' ||
                  state === 'ended'
                }
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={
                  microphoneEnabled
                    ? 'Mute microphone'
                    : 'Unmute microphone'
                }
              >
                {microphoneEnabled ? (
                  <Mic
                    size={20}
                    aria-hidden="true"
                  />
                ) : (
                  <MicOff
                    size={20}
                    aria-hidden="true"
                  />
                )}

                <span className="text-xs">
                  Mic
                </span>
              </button>

              <button
                type="button"
                onClick={toggleSpeaker}
                disabled={!mediaStreamRef.current}
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={
                  speakerEnabled
                    ? 'Mute preview audio'
                    : 'Enable preview audio'
                }
              >
                {speakerEnabled ? (
                  <Volume2
                    size={20}
                    aria-hidden="true"
                  />
                ) : (
                  <VolumeX
                    size={20}
                    aria-hidden="true"
                  />
                )}

                <span className="text-xs">
                  Preview
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {state === 'idle' ||
            state === 'error' ||
            state === 'ended' ? (
              <button
                type="button"
                onClick={prepareCamera}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-[#050A30] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#050A30]"
              >
                <Camera
                  size={18}
                  aria-hidden="true"
                />

                {state === 'ended'
                  ? 'Prepare New Camera Session'
                  : 'Prepare Camera'}
              </button>
            ) : null}

            {state === 'ready' ? (
              <button
                type="button"
                onClick={startBroadcast}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#050A30]"
              >
                <Radio
                  size={18}
                  aria-hidden="true"
                />

                Start Broadcast
              </button>
            ) : null}

            {state === 'live' ? (
              <button
                type="button"
                onClick={stopBroadcast}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-5 py-3.5 text-sm font-bold text-red-200 transition hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#050A30]"
              >
                <Square
                  size={17}
                  fill="currentColor"
                  aria-hidden="true"
                />

                End Broadcast
              </button>
            ) : null}

            {state === 'requesting-media' ||
            state === 'connecting' ||
            state === 'stopping' ? (
              <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white/70">
                <Loader2
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />

                {state === 'requesting-media'
                  ? 'Requesting camera…'
                  : state === 'connecting'
                    ? 'Connecting…'
                    : 'Ending broadcast…'}
              </div>
            ) : null}
          </div>

          <div className="mt-auto pt-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                Broadcast ID
              </p>

              <p className="mt-2 break-all font-mono text-xs text-white/65">
                {broadcast.id}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-6">
        <p className="text-xs leading-5 text-white/45">
          Your camera preview stays in this browser. Starting the
          broadcast sends the selected camera and microphone tracks
          directly to the configured Nexus Hub Live input.
        </p>
      </div>
    </section>
  );
}
