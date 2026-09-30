import type { ReactNode } from 'react';

import Footer from '@/components/navigation/Footer';
import FloatingWhatsApp from '@/components/navigation/FloatingWhatsApp';
import GlobalNav from '@/components/navigation/GlobalNav';

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GlobalNav />

      <main>{children}</main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
