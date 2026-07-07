/**
 * About.tsx — reads all values from config.ts
 */
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import { identity, social, urls, aboutConfig } from '../config';
import BrandIcon from './BrandIcon';

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  bio: string | null;
}

interface CFUser {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
}

function StatChip({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center px-ap-lg py-ap-md bg-ap-surface-low rounded-ap-lg">
      <span className="font-ap-mono text-ap-headline-md font-bold text-ap-on-surface">{value}</span>
      <span className="font-ap-mono text-ap-caption text-ap-on-surface-variant uppercase tracking-widest mt-0.5">{label}</span>
    </div>
  );
}

export default function About() {
  const [gh, setGh] = useState<GitHubUser | null>(null);
  const [cf, setCf] = useState<CFUser | null>(null);

  useEffect(() => {
    axios.get<GitHubUser>(`https://api.github.com/users/${social.githubUsername}`)
      .then((r) => setGh(r.data)).catch(() => { });
    axios.get(`https://codeforces.com/api/user.info?handles=${social.codeforceHandle}`)
      .then((r) => setCf(r.data.result[0])).catch(() => { });
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-ap-surface py-ap-xl md:py-ap-xxl">
      <div className="max-w-ap mx-auto px-ap-lg">

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="mb-ap-xl"
        >
          <h2 className="font-ap-display text-ap-headline-lg text-ap-on-surface mb-ap-sm">
            {aboutConfig.heading}
          </h2>
          <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant max-w-[600px]">
            {aboutConfig.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-ap-lg">

          {/* Profile card */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={itemVariants}
            className="ap-surface-card rounded-xl p-ap-lg md:p-ap-xl flex flex-col sm:flex-row gap-ap-lg items-start"
          >
            <img
              src={identity.profileImage}
              alt={`${identity.name} profile photo`}
              className="w-24 h-24 rounded-full object-cover border-2 border-ap-outline-variant flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).src = `https://github.com/${social.githubUsername}.png`; }}
            />
            <div>
              <h3 className="font-ap-display text-ap-headline-md text-ap-on-surface mb-1">
                {identity.name}
              </h3>
              <p className="font-ap-mono text-ap-caption text-ap-secondary uppercase tracking-widest mb-ap-md">
                {identity.academicLabel}
              </p>
              <div className="space-y-ap-sm mb-ap-lg">
                <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant">
                  <span className="font-bold text-ap-on-surface">Bio: </span>
                  {identity.fallbackBio}
                </p>
                {identity.currentlyLearning && (
                  <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant">
                    <span className="font-bold text-ap-on-surface">Currently Learning: </span>
                    {identity.currentlyLearning}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-ap-sm">
                <a
                  href={social.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-ap-primary text-ap-on-primary
                    font-ap-mono text-ap-caption uppercase tracking-widest
                    px-ap-md py-ap-sm rounded-ap-md
                    hover:opacity-80 transition-opacity
                  "
                >
                  {aboutConfig.resumeLabel}
                </a>
                <a
                  href={urls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    border border-ap-outline
                    font-ap-mono text-ap-caption uppercase tracking-widest
                    px-ap-md py-ap-sm rounded-ap-md
                    hover:bg-ap-surface-low transition-colors
                  "
                >
                  {aboutConfig.linkedinLabel}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.1 } } }}
            className="ap-surface-card rounded-xl p-ap-lg md:p-ap-xl flex flex-col gap-ap-lg"
          >
            {/* GitHub stats */}
            <div>
              <div className="flex items-center gap-2 mb-ap-md">
                <BrandIcon name="github" className="text-ap-secondary text-[20px]" />
                <span className="font-ap-mono text-ap-label-mono text-ap-secondary uppercase tracking-widest">{aboutConfig.githubLabel}</span>
                {gh && (
                  <a href={gh.html_url} target="_blank" rel="noopener noreferrer"
                    className="ml-auto font-ap-mono text-ap-caption text-ap-on-surface-variant hover:text-ap-secondary transition-colors flex items-center gap-1">
                    @{gh.login} <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                )}
              </div>
              <div className="flex gap-ap-md">
                <StatChip label={aboutConfig.stats.github.publicRepos} value={gh?.public_repos ?? aboutConfig.stats.github.defaults.publicRepos} />
                <StatChip label={aboutConfig.stats.github.followers} value={gh?.followers ?? aboutConfig.stats.github.defaults.followers} />
              </div>
            </div>

            <div className="border-t border-ap-outline-variant/30" />

            {/* Codeforces stats */}
            <div>
              <div className="flex items-center gap-2 mb-ap-md">
                <BrandIcon name="codeforces" className="text-ap-secondary text-[20px]" />
                <span className="font-ap-mono text-ap-label-mono text-ap-secondary uppercase tracking-widest">{aboutConfig.codeforcesLabel}</span>
                {cf && (
                  <a href={urls.codeforces} target="_blank" rel="noopener noreferrer"
                    className="ml-auto font-ap-mono text-ap-caption text-ap-on-surface-variant hover:text-ap-secondary transition-colors flex items-center gap-1">
                    @{cf.handle} <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-ap-md">
                <StatChip label={aboutConfig.stats.codeforces.rating} value={cf?.rating ?? aboutConfig.stats.codeforces.defaults.rating} />
                <StatChip label={aboutConfig.stats.codeforces.maxRating} value={cf?.maxRating ?? aboutConfig.stats.codeforces.defaults.maxRating} />
                <StatChip label={aboutConfig.stats.codeforces.rank} value={cf?.rank ?? aboutConfig.stats.codeforces.defaults.rank} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
