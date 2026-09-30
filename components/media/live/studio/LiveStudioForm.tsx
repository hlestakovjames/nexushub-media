'use client';

import { useState } from 'react';

import {
  CheckCircle2,
  Copy,
  ExternalLink,
  KeyRound,
  Loader2,
  Radio,
} from 'lucide-react';

import BrowserCameraBroadcaster from './BrowserCameraBroadcaster';
import LiveIngestMethodSelector from './LiveIngestMethodSelector';

import type {
  MediaLiveIngestMethod,
  MediaProperty,
} from '@/lib/content/media';

import type {
  LiveBroadcastInput,
  LiveBroadcastSession,
  LiveBroadcastVisibility,
} from '@/lib/live/types';

type LiveStudioFormProps = {
  defaultProperty?: MediaProperty;
};

function getChannelLabel(property: MediaProperty) {
  const labels: Record<MediaProperty, string> = {
    'nexus-hub-tv': 'Nexus Hub TV',
    'nhtv-football': 'NHTV Football',
    'nhtv-stories': 'NHTV Stories',
    'nhtv-voices': 'NHTV Voices',
  };

  return labels[property];
}

export default function LiveStudioForm({
  defaultProperty = 'nexus-hub-tv',
}: LiveStudioFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [property, setProperty] =
    useState<MediaProperty>(defaultProperty);

  const [ingestMethod, setIngestMethod] =
    useState<MediaLiveIngestMethod>('browser');

  const [visibility, setVisibility] =
    useState<LiveBroadcastVisibility>('public');

  const [scheduledStart, setScheduledStart] =
    useState('');

  const [broadcast, setBroadcast] =
    useState<LiveBroadcastSession | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState('');

  const [copiedField, setCopiedField] =
    useState<'ingestUrl' | 'streamKey' | null>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Enter a broadcast title.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setBroadcast(null);

    const input: LiveBroadcastInput = {
      title: trimmedTitle,
      description:
        description.trim() || undefined,
      property,
      ingestMethod,
      visibility,
      scheduledStart:
        scheduledStart || undefined,
    };

    try {
      const response = await fetch(
        '/api/live/broadcasts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            'Unable to create the broadcast.',
        );
      }

      setBroadcast(data.broadcast);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to create the broadcast.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyValue = async (
    field: 'ingestUrl' | 'streamKey',
    value?: string,
  ) => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);

      window.setTimeout(() => {
        setCopiedField(null);
      }, 1800);
    } catch {
      setError(
        'Unable to copy this value. Please copy it manually.',
      );
    }
  };

  const handleBroadcastUpdated = (
    updatedBroadcast: LiveBroadcastSession,
  ) => {
    setBroadcast(updatedBroadcast);
  };

  return (
    <div className="space-y-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-10"
      >
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
            Broadcast method
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#050A30]">
            How do you want to go live?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#050A30]/60">
            Choose a direct camera broadcast or connect
            professional production software such as OBS.
          </p>

          <div className="mt-6">
            <LiveIngestMethodSelector
              value={ingestMethod}
              onChange={(value) => {
                setIngestMethod(value);
                setBroadcast(null);
                setError('');
              }}
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-[#050A30]">
              Broadcast title
            </span>

            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setBroadcast(null);
                setError('');
              }}
              placeholder="Enter broadcast title"
              required
              className="mt-2 w-full rounded-xl border border-[#050A30]/15 bg-white px-4 py-3 text-sm text-[#050A30] outline-none transition placeholder:text-[#050A30]/35 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#050A30]">
              Channel
            </span>

            <select
              value={property}
              onChange={(event) => {
                setProperty(
                  event.target.value as MediaProperty,
                );
                setBroadcast(null);
                setError('');
              }}
              className="mt-2 w-full rounded-xl border border-[#050A30]/15 bg-white px-4 py-3 text-sm text-[#050A30] outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15"
            >
              <option value="nexus-hub-tv">
                Nexus Hub TV
              </option>

              <option value="nhtv-football">
                NHTV Football
              </option>

              <option value="nhtv-stories">
                NHTV Stories
              </option>

              <option value="nhtv-voices">
                NHTV Voices
              </option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm font-semibold text-[#050A30]">
              Description
            </span>

            <textarea
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setBroadcast(null);
                setError('');
              }}
              rows={4}
              placeholder="Describe the broadcast"
              className="mt-2 w-full resize-y rounded-xl border border-[#050A30]/15 bg-white px-4 py-3 text-sm leading-6 text-[#050A30] outline-none transition placeholder:text-[#050A30]/35 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#050A30]">
              Visibility
            </span>

            <select
              value={visibility}
              onChange={(event) => {
                setVisibility(
                  event.target.value as LiveBroadcastVisibility,
                );
                setBroadcast(null);
                setError('');
              }}
              className="mt-2 w-full rounded-xl border border-[#050A30]/15 bg-white px-4 py-3 text-sm text-[#050A30] outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15"
            >
              <option value="public">
                Public
              </option>

              <option value="unlisted">
                Unlisted
              </option>

              <option value="private">
                Private
              </option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[#050A30]">
              Schedule
            </span>

            <input
              type="datetime-local"
              value={scheduledStart}
              onChange={(event) => {
                setScheduledStart(
                  event.target.value,
                );
                setBroadcast(null);
                setError('');
              }}
              className="mt-2 w-full rounded-xl border border-[#050A30]/15 bg-white px-4 py-3 text-sm text-[#050A30] outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15"
            />

            <span className="mt-2 block text-xs text-[#050A30]/50">
              Leave empty to prepare the broadcast without a schedule.
            </span>
          </label>
        </section>

        {error ? (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-700"
          >
            <p className="font-semibold">
              Broadcast setup failed
            </p>

            <p className="mt-1">
              {error}
            </p>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-4 border-t border-[#050A30]/10 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  size={17}
                  className="animate-spin"
                  aria-hidden="true"
                />

                Creating broadcast...
              </>
            ) : (
              <>
                <Radio
                  size={17}
                  aria-hidden="true"
                />

                Create broadcast
              </>
            )}
          </button>

          {broadcast ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700">
              <CheckCircle2
                size={17}
                aria-hidden="true"
              />

              Broadcast created successfully.
            </p>
          ) : null}
        </div>
      </form>

      {broadcast ? (
        <section className="space-y-6">
          {broadcast.ingestMethod === 'browser' ? (
            <BrowserCameraBroadcaster
              broadcast={broadcast}
              onBroadcastUpdated={
                handleBroadcastUpdated
              }
            />
          ) : null}

          {broadcast.ingestMethod ===
          'external-encoder' ? (
            <section className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#050A30] text-white shadow-xl">
              <div className="border-b border-white/10 px-6 py-6 sm:px-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#050A30]">
                      <CheckCircle2
                        size={14}
                        aria-hidden="true"
                      />

                      Broadcast ready
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {broadcast.title}
                    </h2>

                    <p className="mt-2 text-sm text-white/60">
                      {getChannelLabel(
                        broadcast.property,
                      )}
                      {' · '}
                      External encoder
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                      Status
                    </p>

                    <p className="mt-1 text-sm font-semibold capitalize text-cyan-300">
                      {broadcast.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
                <div>
                  <div className="flex items-center gap-2">
                    <ExternalLink
                      size={17}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />

                    <h3 className="text-base font-semibold">
                      Connect your encoder
                    </h3>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                    Use these Cloudflare RTMPS credentials in OBS,
                    vMix, or compatible broadcast software.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <CredentialField
                    label="RTMPS server"
                    value={broadcast.ingestUrl}
                    onCopy={() =>
                      copyValue(
                        'ingestUrl',
                        broadcast.ingestUrl,
                      )
                    }
                    copied={
                      copiedField === 'ingestUrl'
                    }
                  />

                  <CredentialField
                    label="Stream key"
                    value={broadcast.streamKey}
                    sensitive
                    onCopy={() =>
                      copyValue(
                        'streamKey',
                        broadcast.streamKey,
                      )
                    }
                    copied={
                      copiedField === 'streamKey'
                    }
                  />
                </div>

                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
                  <div className="flex gap-3">
                    <KeyRound
                      size={19}
                      className="mt-0.5 shrink-0 text-amber-300"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-semibold text-amber-200">
                        Keep the stream key private
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        Anyone with this key may be able to
                        broadcast through this live input. Do not
                        publish it or share it publicly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    Broadcast ID
                  </p>

                  <p className="mt-2 break-all font-mono text-xs text-white/55">
                    {broadcast.id}
                  </p>
                </div>
              </div>
            </section>
          ) : null}

          {broadcast.ingestMethod === 'mobile' ? (
            <section className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#050A30] text-white shadow-xl">
              <div className="px-6 py-7 sm:px-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-[#050A30]">
                    <Radio
                      size={21}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#050A30]">
                      <CheckCircle2
                        size={14}
                        aria-hidden="true"
                      />

                      Broadcast ready
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                      Mobile camera broadcast
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                      The live input is prepared for the future Nexus Hub
                      mobile broadcast experience. The mobile broadcaster
                      will connect directly to this live input without OBS.
                    </p>
                  </div>
                </div>

                {broadcast.ingestUrl ? (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                      WebRTC ingest endpoint
                    </p>

                    <p className="mt-3 break-all font-mono text-xs leading-6 text-white/65">
                      {broadcast.ingestUrl}
                    </p>
                  </div>
                ) : null}

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    Broadcast ID
                  </p>

                  <p className="mt-2 break-all font-mono text-xs text-white/55">
                    {broadcast.id}
                  </p>
                </div>
              </div>
            </section>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function CredentialField({
  label,
  value,
  sensitive = false,
  copied,
  onCopy,
}: {
  label: string;
  value?: string;
  sensitive?: boolean;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
          {label}
        </p>

        <button
          type="button"
          onClick={onCopy}
          disabled={!value}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/75 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {copied ? (
            <CheckCircle2
              size={14}
              aria-hidden="true"
            />
          ) : (
            <Copy
              size={14}
              aria-hidden="true"
            />
          )}

          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <p className="mt-3 break-all rounded-xl bg-black/20 px-4 py-3 font-mono text-xs leading-6 text-white/80">
        {value ||
          (sensitive
            ? 'Not available'
            : 'Not available')}
      </p>
    </div>
  );
}
