'use client';

import {
  Camera,
  MonitorUp,
  Smartphone,
} from 'lucide-react';

import type { MediaLiveIngestMethod } from '@/lib/content/media';

type LiveIngestMethodSelectorProps = {
  value: MediaLiveIngestMethod;
  onChange: (value: MediaLiveIngestMethod) => void;
};

const methods: Array<{
  value: MediaLiveIngestMethod;
  title: string;
  description: string;
  icon: typeof Camera;
}> = [
  {
    value: 'browser',
    title: 'Browser camera',
    description:
      'Use your computer camera and microphone directly from Live Studio.',
    icon: Camera,
  },
  {
    value: 'mobile',
    title: 'Phone camera',
    description:
      'Broadcast from a supported mobile camera experience without OBS.',
    icon: Smartphone,
  },
  {
    value: 'external-encoder',
    title: 'External encoder',
    description:
      'Use OBS, vMix, or compatible professional broadcast equipment.',
    icon: MonitorUp,
  },
];

export default function LiveIngestMethodSelector({
  value,
  onChange,
}: LiveIngestMethodSelectorProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {methods.map((method) => {
        const Icon = method.icon;
        const selected = value === method.value;

        return (
          <button
            key={method.value}
            type="button"
            onClick={() => onChange(method.value)}
            className={`rounded-2xl border p-5 text-left transition ${
              selected
                ? 'border-cyan-500 bg-cyan-50 shadow-sm'
                : 'border-[#050A30]/10 bg-white hover:border-cyan-300 hover:bg-cyan-50/40'
            }`}
            aria-pressed={selected}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                selected
                  ? 'bg-cyan-400 text-[#050A30]'
                  : 'bg-[#050A30]/5 text-[#050A30]'
              }`}
            >
              <Icon size={21} aria-hidden="true" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-[#050A30]">
              {method.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#050A30]/60">
              {method.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
