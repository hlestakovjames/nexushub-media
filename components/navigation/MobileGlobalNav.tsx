'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { ContextNavigationItem } from '@/config/navigation/context-navigation';

type QuickLink = {
  label: string;
  href: string;
};

type MobileGlobalNavProps = {
  contextLabel: string;
  contextItems: ContextNavigationItem[];
  quickLinks?: QuickLink[];
};

function isActivePath(
  pathname: string,
  href: string,
) {
  return href === '/'
    ? pathname === '/'
    : pathname === href ||
        pathname.startsWith(`${href}/`);
}

export default function MobileGlobalNav({
  contextLabel,
  contextItems,
  quickLinks = [],
}: MobileGlobalNavProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] =
    useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsQuickLinksOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={
          isOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#050A30]/10 text-[#050A30] transition hover:bg-[#050A30]/5"
      >
        <span className="sr-only">
          {isOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'}
        </span>

        <span className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen
                ? 'translate-y-2 rotate-45'
                : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen
                ? '-translate-y-2 -rotate-45'
                : ''
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[#050A30]/10 bg-white text-[#050A30] shadow-xl md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-6 py-5"
          >
            {/* MEDIA UTILITY */}
            <div className="rounded-xl border border-white/10 bg-[#030721] p-2">
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5FC9E6]">
                Nexus Hub Media
              </p>

              <button
                type="button"
                onClick={() =>
                  setIsQuickLinksOpen(
                    (open) => !open,
                  )
                }
                aria-expanded={isQuickLinksOpen}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                <span>Media Channels</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform ${
                    isQuickLinksOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isQuickLinksOpen && (
                <div className="ml-2 border-l border-white/10 pl-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-2 grid grid-cols-1 gap-1 border-t border-white/10 pt-2 sm:grid-cols-2">
                <Link
                  href="tel:0728812649"
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/65 transition hover:bg-white/5 hover:text-white"
                >
                  Call Us
                </Link>

                <Link
                  href="https://wa.me/254713290745"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/65 transition hover:bg-white/5 hover:text-white"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* CONTEXT NAVIGATION */}
            <div className="mt-4 rounded-xl border border-[#050A30]/10 bg-white p-2 text-[#050A30]">
              <p className="px-1 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5FC9E6]">
                {contextLabel} Navigation
              </p>

              <div className="space-y-1">
                {contextItems.map((item) => {
                  const active = isActivePath(
                    pathname,
                    item.href,
                  );

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-md px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? 'bg-[#050A30]/5 text-[#050A30]'
                          : 'text-[#050A30]/70 hover:bg-[#050A30]/5 hover:text-[#050A30]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
