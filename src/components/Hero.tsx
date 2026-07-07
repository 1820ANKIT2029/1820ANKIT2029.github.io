/**
 * Hero.tsx — reads all values from config.ts
 */
import { motion } from 'framer-motion';
import { identity, heroConfig, urls } from '../config';
import BrandIcon from './BrandIcon';

export default function Hero() {
  return (
    <section id="hero" className="ap-hero-gradient pt-ap-xl md:pt-ap-xxl pb-ap-lg md:pb-ap-xl mt-16 overflow-hidden">
      <div className="max-w-ap mx-auto px-ap-lg grid md:grid-cols-2 gap-ap-xl items-center">

        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="
            inline-block px-ap-sm py-ap-xs
            bg-ap-secondary-fixed text-ap-on-secondary-fixed-variant
            font-ap-mono text-ap-caption uppercase tracking-widest
            rounded-ap-md mb-ap-md
          ">
            {identity.roleBadge}
          </span>

          <h1 className="font-ap-display text-ap-display-mob md:text-ap-display text-ap-primary mb-ap-md leading-none">
            {identity.headline}
          </h1>

          <p className="font-ap-body text-ap-body-lg text-ap-on-surface-variant mb-ap-lg max-w-[500px]">
            {identity.tagline}{' '}
            {identity.taglineKeywords.map((kw, i) => (
              <span key={kw}>
                <span className="text-ap-primary font-semibold">{kw}</span>
                {i < identity.taglineKeywords.length - 1 ? ' and ' : '.'}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap gap-ap-md">
            <a
              href={heroConfig.ctaPrimary.href}
              className="
                bg-ap-primary text-ap-on-primary
                font-ap-mono text-ap-caption uppercase tracking-widest
                px-ap-lg py-ap-md rounded-ap-md
                hover:opacity-85 transition-opacity duration-200
              "
            >
              {heroConfig.ctaPrimary.label}
            </a>
            <a
              href={heroConfig.ctaSecondary.href}
              className="
                border border-ap-outline
                font-ap-mono text-ap-caption uppercase tracking-widest
                px-ap-lg py-ap-md rounded-ap-md
                hover:bg-ap-surface-low transition-colors duration-200
              "
            >
              {heroConfig.ctaSecondary.label}
            </a>
          </div>
        </motion.div>

        {/* ── Right: Engineering Snapshot card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="ap-surface-card p-ap-lg md:p-ap-xl rounded-xl relative overflow-hidden group">
            <div className="
              pointer-events-none absolute -top-16 -right-16
              w-32 h-32 rounded-bl-full bg-ap-secondary/5
              transition-transform duration-500 group-hover:scale-110
            " />

            <h3 className="font-ap-mono text-ap-label-mono text-ap-secondary uppercase tracking-widest mb-ap-xl">
              {heroConfig.snapshotHeading}
            </h3>

            <div className="space-y-ap-lg">
              {heroConfig.snapshotRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between pb-ap-sm ${
                    i < heroConfig.snapshotRows.length - 1 ? 'border-b border-ap-outline-variant' : ''
                  }`}
                >
                  <span className="font-ap-body text-ap-body-md text-ap-on-surface-variant">{row.label}</span>
                  <span className="font-ap-mono text-ap-label-mono font-bold text-ap-on-surface">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="mt-ap-xl pt-ap-lg flex items-center gap-ap-md">
              {/* Icon stack */}
              <div className="flex -space-x-2">
                {heroConfig.snapshotIcons.map((icon) => (
                  <div
                    key={icon}
                    className="w-8 h-8 rounded-full bg-ap-surface-high border-2 border-white flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-[16px] text-ap-on-surface-variant">{icon}</span>
                  </div>
                ))}
              </div>

              <span className="font-ap-mono text-ap-caption text-ap-on-surface-variant flex-1">
                {identity.availabilityText}
              </span>

              {/* Platform badges */}
              <div className="flex items-center gap-2">
                <a href={urls.leetcode} target="_blank" rel="noopener noreferrer"
                  className="text-ap-on-surface-variant hover:text-ap-secondary transition-colors" title="LeetCode">
                  <BrandIcon name="leetcode" className="text-[18px]" />
                </a>
                <span className="font-ap-mono text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 border border-yellow-500/20">
                  {heroConfig.leetcodeBadge}
                </span>
                <a href={urls.codeforces} target="_blank" rel="noopener noreferrer"
                  className="text-ap-on-surface-variant hover:text-ap-secondary transition-colors ml-1" title="Codeforces">
                  <BrandIcon name="codeforces" className="text-[18px]" />
                </a>
                <span className="font-ap-mono text-[10px] px-1.5 py-0.5 rounded-full bg-ap-secondary/10 text-ap-secondary border border-ap-secondary/20">
                  {heroConfig.codeforcesBadge}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
