import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/254713290745"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nexus Hub on WhatsApp"
      title="Chat with Nexus Hub on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-white"
    >
      <MessageCircle
        size={28}
        strokeWidth={2}
        aria-hidden="true"
      />

      <span className="sr-only">
        Chat with Nexus Hub on WhatsApp
      </span>
    </Link>
  );
}
