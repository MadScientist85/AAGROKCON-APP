import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { width: 120, height: 120 },
    md: { width: 180, height: 180 },
    lg: { width: 240, height: 240 },
  };

  return (
    <Link href="/" className="flex items-center">
      <div className="relative">
        <Image
          src="/grokcon-logo.png"
          alt="GrokCon Empire"
          width={sizes[size].width}
          height={sizes[size].height}
          className="drop-shadow-[0_0_15px_rgba(173,216,230,0.8)]"
          priority
        />
      </div>
    </Link>
  );
}

