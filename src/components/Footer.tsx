/**
 * Footer.tsx — reads all values from config.ts
 */
import { footerConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-ap-surface border-t border-ap-outline-variant py-ap-xl md:py-ap-xxl">
      <div className="max-w-ap mx-auto px-ap-lg flex flex-col md:flex-row items-center justify-between gap-ap-md">
        <div>
          <p className="font-ap-mono text-ap-label-mono font-bold text-ap-primary mb-1">
            {footerConfig.brand}
          </p>
          <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant">
            {footerConfig.copyright}
          </p>
        </div>
        <nav className="flex flex-wrap gap-ap-xl" aria-label="Footer navigation">
          {footerConfig.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-ap-body text-ap-body-md text-ap-on-surface-variant
                hover:text-ap-secondary transition-colors duration-200
              "
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
