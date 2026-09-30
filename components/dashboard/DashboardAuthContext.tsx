'use client';

import {
  createContext,
  useContext,
  type ReactNode,
} from 'react';

import type { AuthUser } from '@/lib/api/auth';

type DashboardAuthContextValue = {
  user: AuthUser;
};

const DashboardAuthContext =
  createContext<DashboardAuthContextValue | null>(
    null,
  );

export function DashboardAuthProvider({
  user,
  children,
}: {
  user: AuthUser;
  children: ReactNode;
}) {
  return (
    <DashboardAuthContext.Provider value={{ user }}>
      {children}
    </DashboardAuthContext.Provider>
  );
}

export function useDashboardAuth() {
  const context = useContext(
    DashboardAuthContext,
  );

  if (!context) {
    throw new Error(
      'useDashboardAuth must be used inside DashboardAuthProvider.',
    );
  }

  return context;
}