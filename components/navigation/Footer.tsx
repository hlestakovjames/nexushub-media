import Link from 'next/link';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const footerGroups = [
  {
    title: 'Media',
    links: [
      { label: 'Nexus Hub TV', href: '/nexus-hub-tv' },
      { label: 'NHTV Football', href: '/nhtv-football' },
      { label: 'NHTV Stories', href: '/nhtv-stories' },
      { label: 'NHTV Voices', href: '/nhtv-voices' },
    ],
  },
  {
    title: 'Nexus Hub TV',
    links: [
      { label: 'Shows', href: '/nexus-hub-tv/shows' },
      { label: 'Programs', href: '/nexus-hub-tv/programs' },
      { label: 'Live', href: '/nexus-hub-tv/live' },
      { label: 'Videos', href: '/nexus-hub-tv/videos' },
      { label: 'News', href: '/nexus-hub-tv/news' },
      { label: 'About', href: '/nexus-hub-tv/about' },
    ],
  },
  {
    title: 'NHTV Football',
    links: [
      { label: 'News', href: '/nhtv-football/news' },
      { label: 'Fixtures', href: '/nhtv-football/fixtures' },
      { label: 'Results', href: '/nhtv-football/results' },
      { label: 'Teams', href: '/nhtv-football/teams' },
      { label: 'Videos', href: '/nhtv-football/videos' },
      { label: 'About', href: '/nhtv-football/about' },
    ],
  },
  {
    title: 'Stories & Voices',
    links: [
      { label: 'Stories', href: '/nhtv-stories' },
      { label: 'Featured Stories', href: '/nhtv-stories/featured' },
      { label: 'Community', href: '/nhtv-stories/community' },
      { label: 'Voices', href: '/nhtv-voices' },
      { label: 'Podcasts', href: '/nhtv-voices/podcasts' },
      { label: 'Interviews', href: '/nhtv-voices/interviews' },
    ],
  },
];

const connectLinks = [
  {
    label: 'Call Us',
    href: 'tel:0728812649',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254713290745',
  },
  {
    label: 'Email',
    href: 'mailto:nexushubkenya@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030721] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          {/* BRAND BLOCK */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Nexus Hub Media home"
              className="inline-flex items-center"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-sm">
                <NexusHubLogo
                  size={52}
                  showWordmark={false}
                />
              </div>
            </Link>

            <p className="mt-6 text-lg font-semibold leading-7 text-white">
              Nexus Hub Media
            </p>

            <p className="mt-4 text-sm leading-7 text-white/55">
              One ecosystem. Four media experiences. Nexus Hub Media
              brings together television, football, stories, and voices
              under one connected media platform.
            </p>
          </div>

          {/* LINK GROUPS */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CONNECT */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Connect
              </h2>

              <ul className="mt-5 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith('https://')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        link.href.startsWith('https://')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 text-sm leading-6 text-white/50">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#5FC9E6]"
                    aria-hidden="true"
                  />
                  <span>Nairobi, Kenya</span>
                </div>

                <Link
                  href="tel:0728812649"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Phone
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#5FC9E6]"
                    aria-hidden="true"
                  />
                  <span>0728 812 649</span>
                </Link>

                <Link
                  href="https://wa.me/254713290745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#5FC9E6]"
                    aria-hidden="true"
                  />
                  <span>0713 290 745</span>
                </Link>

                <Link
                  href="mailto:nexushubkenya@gmail.com"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Mail
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#5FC9E6]"
                    aria-hidden="true"
                  />
                  <span>nexushubkenya@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-white/40">
            © {new Date().getFullYear()} Nexus Hub Media. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="text-white/40">
              Nexus Hub Media
            </span>

            <Link
              href="/"
              className="text-white/40 transition hover:text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
