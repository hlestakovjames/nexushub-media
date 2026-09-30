'use client';

import Link from 'next/link';
import {
  usePathname,
  useRouter,
} from 'next/navigation';
import {
  type ReactNode,
  useState,
} from 'react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';
import { useDashboardAuth } from './DashboardAuthContext';

type SystemShellProps = {
  children: ReactNode;
};

const navigation = [
  {
    label: 'Overview',
    href: '/dashboard',
  },
  {
    label: 'Organizations',
    href: '/dashboard/organizations',
  },
  {
    label: 'Users',
    href: '/dashboard/users',
  },
  {
    label: 'Departments',
    href: '/dashboard/departments',
  },
  {
    label: 'Roles & Permissions',
    href: '/dashboard/access',
  },
  {
    label: 'Security & Audit',
    href: '/dashboard/security',
  },
];

export default function SystemShell({
  children,
}: SystemShellProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useDashboardAuth();

  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const [isUserMenuOpen, setIsUserMenuOpen] =
    useState(false);

  function handleLogout() {
    localStorage.removeItem(
      'nexus_hub_access_token',
    );

    localStorage.removeItem(
      'nexus_hub_user',
    );

    localStorage.removeItem(
      'nexus_hub_remember',
    );

    router.replace('/login');
  }

  function isActiveRoute(href: string) {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  const initials =
    `${user.first_name?.charAt(0) ?? ''}${user.last_name?.charAt(0) ?? ''}`.toUpperCase();

  const currentNavigation =
    navigation.find((item) =>
      isActiveRoute(item.href),
    );

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#050A30]">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() =>
            setIsSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-[#050A30]/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col bg-[#050A30] text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        {/* BRAND */}
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/dashboard"
            onClick={() =>
              setIsSidebarOpen(false)
            }
            className="flex items-center"
            aria-label="Nexus Hub System dashboard"
          >
            <NexusHubLogo
              size={42}
              showWordmark={true}
            />
          </Link>

          <button
            type="button"
            onClick={() =>
              setIsSidebarOpen(false)
            }
            className="rounded-lg p-2 text-white/40 transition hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>

        {/* SYSTEM */}
        <div className="border-b border-white/10 px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            System
          </p>

          <p className="mt-1 text-xs text-white/35">
            Administration workspace
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <div className="space-y-1">
            {navigation.map((item) => {
              const active =
                isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setIsSidebarOpen(false)
                  }
                  className={`group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`mr-3 h-2 w-2 rounded-full transition ${
                      active
                        ? 'bg-[#5FC9E6]'
                        : 'bg-white/20 group-hover:bg-white/50'
                    }`}
                  />

                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* USER */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1266B6] text-xs font-bold text-white">
              {initials}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {user.first_name} {user.last_name}
              </p>

              <p className="truncate text-xs text-white/35">
                {user.email}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white"
              aria-label="Sign out"
              title="Sign out"
            >
              ↗
            </button>
          </div>
        </div>
      </aside>

      {/* APPLICATION AREA */}
      <div className="lg:pl-[270px]">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-[76px] items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setIsSidebarOpen(true)
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 lg:hidden"
                aria-label="Open navigation"
              >
                ☰
              </button>

              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Nexus Hub System
                </p>

                <h1 className="mt-1 truncate text-lg font-bold text-[#050A30]">
                  {currentNavigation?.label ??
                    'Dashboard'}
                </h1>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setIsUserMenuOpen(
                    (open) => !open,
                  )
                }
                className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
                aria-expanded={isUserMenuOpen}
                aria-label="Open user menu"
              >
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold text-[#050A30]">
                    {user.first_name}{' '}
                    {user.last_name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {user.role}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050A30] text-xs font-bold text-white">
                  {initials}
                </div>

                <span className="hidden text-xs text-slate-400 sm:block">
                  ▾
                </span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  <div className="border-b border-slate-100 px-3 py-3">
                    <p className="truncate text-sm font-semibold">
                      {user.first_name}{' '}
                      {user.last_name}
                    </p>

                    <p className="mt-1 truncate text-xs text-slate-400">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/dashboard"
                    onClick={() =>
                      setIsUserMenuOpen(false)
                    }
                    className="mt-1 block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    Dashboard
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      handleLogout();
                    }}
                    className="mt-1 w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* MODULE CONTENT */}
        <main>{children}</main>
      </div>
    </div>
  );
}