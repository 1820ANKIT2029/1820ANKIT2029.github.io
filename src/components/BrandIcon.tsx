import { SiLeetcode, SiCodeforces, SiGithub, SiLinkedin } from 'react-icons/si';

interface BrandIconProps {
  name: string;
  className?: string;
}

export default function BrandIcon({ name, className }: BrandIconProps) {
  const normalized = name.toLowerCase();
  
  switch (normalized) {
    case 'leetcode':
      return <SiLeetcode className={className} />;
    case 'codeforces':
      return <SiCodeforces className={className} />;
    case 'github':
      return <SiGithub className={className} />;
    case 'linkedin':
      return <SiLinkedin className={className} />;
    default:
      return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
  }
}
