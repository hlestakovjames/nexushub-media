'use client';

import {
  Check,
  Copy,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type ShareContentProps = {
  title: string;
  url?: string;
  className?: string;
};

export default function ShareContent({
  title,
  url,
  className = '',
}: ShareContentProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(url ?? '');
  const [canUseNativeShare, setCanUseNativeShare] = useState(false);

  useEffect(() => {
    if (!url) {
      setShareUrl(window.location.href);
    }

    setCanUseNativeShare(
      typeof navigator.share === 'function',
    );
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    if (!shareUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      setCopied(false);
    }
  };

  const nativeShare = async () => {
    if (!shareUrl || typeof navigator.share !== 'function') {
      return;
    }

    try {
      await navigator.share({
        title,
        url: shareUrl,
      });
    } catch {
      // User cancellation is intentionally ignored.
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Share this content"
    >
      {canUseNativeShare ? (
        <button
          type="button"
          onClick={nativeShare}
          aria-label="Share using your device"
          title="Share"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#050A30]/10 bg-white text-[#050A30] transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <Share2 size={18} aria-hidden="true" />
        </button>
      ) : null}

      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        title={copied ? 'Link copied' : 'Copy link'}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#050A30]/10 bg-white text-[#050A30] transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {copied ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <Copy size={18} aria-hidden="true" />
        )}
      </button>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="WhatsApp"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#050A30]/10 bg-white text-[#050A30] transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <MessageCircle size={18} aria-hidden="true" />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Facebook"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#050A30]/10 bg-white text-[#050A30] transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        f
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="LinkedIn"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#050A30]/10 bg-white text-[#050A30] transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        in
      </a>
    </div>
  );
}
