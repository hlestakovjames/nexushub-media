import Image from 'next/image';

type NexusHubLogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
};

export default function NexusHubLogo({
  size = 44,
  showWordmark = true,
  className = '',
}: NexusHubLogoProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
    >
      <Image
        src="/images/brand/nexushub-logo.jpeg"
        alt="Nexus Hub"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />

      {showWordmark && (
        <span className="text-lg font-bold tracking-tight text-[#050A30]">
          Nexus Hub
        </span>
      )}
    </div>
  );
}