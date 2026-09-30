'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';
import {
  resolveNavigationContext,
  type ContextNavigationItem,
} from '@/config/navigation/context-navigation';

import MobileGlobalNav from './MobileGlobalNav';

type GlobalNavProps = {
  sectionId?: string;
};

const quickLinks = [
  {
    label: 'Nexus Hub TV',
    href: '/nexus-hub-tv',
  },
  {
    label: 'NHTV Football',
    href: '/nhtv-football',
  },
  {
    label: 'NHTV Stories',
    href: '/nhtv-stories',
  },
  {
    label: 'NHTV Voices',
    href: '/nhtv-voices',
  },
];

function isActivePath(
  pathname: string,
  href: string,
) {
  return href === '/'
    ? pathname === '/'
    : pathname === href ||
        pathname.startsWith(`${href}/`);
}

function ContextItem({
  item,
  pathname,
}: {
  item: ContextNavigationItem;
  pathname: string;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={`relative shrink-0 px-3 py-4 text-[13px] font-bold tracking-[0.04em] transition ${
        active
          ? 'text-[#050A30]'
          : 'text-[#050A30]/65 hover:text-[#050A30]'
      }`}
    >
      {item.label}

      {active && (
        <span className="absolute bottom-1.5 left-3 right-3 h-0.5 rounded-full bg-[#5FC9E6]" />
      )}
    </Link>
  );
}

export default function GlobalNav({
  sectionId: _sectionId,
}: GlobalNavProps) {
  const pathname = usePathname();
  const [isQuickLinksOpen, setIsQuickLinksOpen] =
    useState(false);

  const context = resolveNavigationContext(pathname);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================================================================
          LAYER 1 — MEDIA UTILITY
          ================================================================ */}
      <div className="border-b border-white/10 bg-[#050A30] text-white">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-6">
          {/* QUICK LINKS */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setIsQuickLinksOpen((open) => !open)
              }
              aria-expanded={isQuickLinksOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              Media

              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${
                  isQuickLinksOpen ? 'rotate-180' : ''
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
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-white/10 bg-[#07123F] p-3 shadow-2xl"
              >
                <div className="mb-2 px-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                    Media Channels
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Explore the Nexus Hub media ecosystem.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() =>
                        setIsQuickLinksOpen(false)
                      }
                      className="block rounded-lg px-2.5 py-2.5 text-sm text-white transition hover:bg-white/10 hover:text-[#5FC9E6]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* UTILITY ACTIONS */}
          <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90 sm:flex">
            <Link
              href="tel:0728812649"
              className="transition hover:text-[#5FC9E6]"
            >
              Call Us
            </Link>

            <Link
              href="https://wa.me/254713290745"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#5FC9E6]"
            >
              WhatsApp
            </Link>
          </div>

          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:block">
            Nexus Hub Media
          </span>
        </div>
      </div>

      {/* ================================================================
          LAYER 2 — CONTEXT NAVIGATION
          ================================================================ */}
      <div className="border-b border-[#050A30]/10 bg-white text-[#050A30] shadow-sm">
        <div className="mx-auto flex min-h-14 max-w-7xl items-center">
          {/* BRAND */}
          <Link
            href="/"
            aria-label="Nexus Hub Media home"
            className="flex shrink-0 items-center px-6"
          >
            <NexusHubLogo
              size={40}
              showWordmark={true}
            />
          </Link>

          {/* CONTEXT */}
          <nav
            aria-label={`${context.label} navigation`}
            className="hidden min-w-0 flex-1 items-center overflow-x-auto text-[#050A30] md:flex"
          >
            {context.items.map((item) => (
              <ContextItem
                key={item.href}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          {/* MOBILE */}
          <div className="ml-auto pr-6 md:hidden">
            <MobileGlobalNav
              contextLabel={context.label}
              contextItems={context.items}
              quickLinks={quickLinks}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
