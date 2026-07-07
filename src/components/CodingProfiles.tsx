/**
 * CodingProfiles.tsx — reads all values from config.ts
 *
 * Implements the Stitch screen:
 *   "Ankit Kumar | Portfolio with Coding Profiles"
 *   Project: Engineering Product Portfolio (ID: 594717918267822111)
 *   Screen ID: 48966be56b8b4fc4bbed98f338cf1c92
 */
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { motion, useInView, type Variants } from 'framer-motion';
import { codingProfilesConfig, social, type CodingPlatform } from '../config';
import BrandIcon from './BrandIcon';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function StatRow({ label, value, isLast }: { label: string; value: string; isLast: boolean }) {
  return (
    <div className={`flex items-center justify-between py-ap-sm ${isLast ? '' : 'border-b border-ap-outline-variant/30'}`}>
      <span className="text-ap-body-md text-ap-on-surface-variant font-ap-body">{label}</span>
      <span className="font-ap-mono text-ap-label-mono font-bold text-ap-on-surface">{value}</span>
    </div>
  );
}

function ProfileCard({ platform, liveData }: { platform: CodingPlatform; liveData: any }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Merge live API data with static config
  const displayStats = platform.stats.map(s => {
    let value = s.value;
    if (liveData) {
      if (platform.id === 'leetcode') {
        if (s.label === 'Problems Solved' && liveData.totalSolved) value = `${liveData.totalSolved}`;
        if (s.label === 'Contest Rating' && liveData.contestRating) value = `${liveData.contestRating}`;
      }
      if (platform.id === 'codeforces') {
        if (s.label === 'Problems Solved' && liveData.problemsSolved) value = `${liveData.problemsSolved}`;
        if (s.label === 'Max Rating' && liveData.maxRating) value = `${liveData.maxRating}`;
        if (s.label === 'Rounds Participated' && liveData.roundsParticipated) value = `${liveData.roundsParticipated}`;
      }
    }
    return { ...s, value };
  });

  if (liveData) {
    if (platform.id === 'leetcode') {
      if (liveData.topPercentage) displayStats.push({ label: 'Top Percentage', value: `${liveData.topPercentage}%` });
    }
    if (platform.id === 'codeforces') {
      if (liveData.maxRank) {
        // Capitalize max rank
        const formattedRank = liveData.maxRank.charAt(0).toUpperCase() + liveData.maxRank.slice(1);
        displayStats.push({ label: 'Max Rank', value: formattedRank });
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="ap-surface-card rounded-xl p-ap-lg md:p-ap-xl flex flex-col relative overflow-hidden group"
      role="article"
      aria-label={`${platform.name} profile stats`}
    >
      {/* Corner accent */}
      <div className={`
        pointer-events-none absolute -top-16 -right-16
        w-32 h-32 rounded-bl-full ${platform.dotBg}
        transition-transform duration-500 group-hover:scale-110
      `} />

      {/* Header */}
      <div className="flex items-start justify-between mb-ap-lg">
        <div className="w-12 h-12 rounded-ap-lg bg-ap-surface-high flex items-center justify-center flex-shrink-0">
          <BrandIcon name={platform.icon} className={`text-2xl ${platform.accentClass}`} />
        </div>
        {liveData?.avatar && (
          <img src={liveData.avatar} alt={`${platform.name} avatar`} className="w-12 h-12 rounded-full border border-ap-outline-variant/30 object-cover shadow-sm" />
        )}
      </div>

      {/* Name */}
      <h3 className="font-ap-display text-ap-headline-md text-ap-on-surface mb-ap-lg">{platform.name}</h3>

      {/* Stats */}
      <div className="flex-1 flex flex-col justify-center">
        {displayStats.map((s, i) => (
          <StatRow key={s.label} label={s.label} value={s.value} isLast={i === displayStats.length - 1} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-ap-xl pt-ap-md border-t border-ap-outline-variant/30">
        <a
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-ap-mono text-ap-caption uppercase tracking-widest text-ap-primary hover:text-ap-secondary transition-colors duration-200 group/link"
          aria-label={`View ${platform.name} profile`}
        >
          <span>{codingProfilesConfig.viewProfileLabel}</span>
          <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover/link:translate-x-0.5">
            chevron_right
          </span>
        </a>
      </div>

      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-xl pointer-events-none ring-1 ring-inset ring-black/[0.03] transition-opacity duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.div>
  );
}

function SectionHeader() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={itemVariants} className="mb-ap-xl">
      <h2 className="font-ap-display text-ap-headline-lg text-ap-on-surface mb-ap-sm">
        {codingProfilesConfig.heading}
      </h2>
      <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant max-w-[600px]">
        {codingProfilesConfig.subtitle}
      </p>
    </motion.div>
  );
}

export default function CodingProfiles() {
  const gridRef    = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  const [lcData, setLcData] = useState<any>(null);
  const [cfData, setCfData] = useState<any>(null);

  useEffect(() => {
    // Fetch LeetCode stats and contest rating concurrently using alfa-leetcode-api (CORS friendly)
    Promise.all([
      axios.get(`https://alfa-leetcode-api.onrender.com/${social.leetcodeUsername}`).catch(() => null),
      axios.get(`https://alfa-leetcode-api.onrender.com/${social.leetcodeUsername}/solved`).catch(() => null),
      axios.get(`https://alfa-leetcode-api.onrender.com/${social.leetcodeUsername}/contest`).catch(() => null)
    ]).then(([profileRes, solvedRes, contestRes]) => {
      const lcDataPayload: any = {};
      if (profileRes?.data) {
        if (profileRes.data.avatar) lcDataPayload.avatar = profileRes.data.avatar;
      }
      if (solvedRes?.data?.solvedProblem) {
        lcDataPayload.totalSolved = solvedRes.data.solvedProblem;
      }
      if (contestRes?.data) {
        if (contestRes.data.contestRating) lcDataPayload.contestRating = Math.round(contestRes.data.contestRating);
        if (contestRes.data.contestTopPercentage) lcDataPayload.topPercentage = contestRes.data.contestTopPercentage;
      }
      if (Object.keys(lcDataPayload).length > 0) {
        setLcData(lcDataPayload);
      }
    });

    // Fetch Codeforces stats
    Promise.all([
      axios.get(`https://codeforces.com/api/user.info?handles=${social.codeforceHandle}`).catch(() => null),
      axios.get(`https://codeforces.com/api/user.rating?handle=${social.codeforceHandle}`).catch(() => null),
      axios.get(`https://codeforces.com/api/user.status?handle=${social.codeforceHandle}`).catch(() => null)
    ]).then(([infoRes, ratingRes, statusRes]) => {
      const cfDataPayload: any = {};
      if (infoRes?.data?.status === 'OK' && infoRes.data.result.length > 0) {
        const info = infoRes.data.result[0];
        cfDataPayload.maxRating = info.maxRating;
        cfDataPayload.avatar = info.titlePhoto || info.avatar;
        cfDataPayload.maxRank = info.maxRank;
      }
      if (ratingRes?.data?.status === 'OK') {
        cfDataPayload.roundsParticipated = ratingRes.data.result.length;
      }
      if (statusRes?.data?.status === 'OK') {
        const solved = new Set(
          statusRes.data.result
            .filter((s: any) => s.verdict === 'OK')
            .map((s: any) => s.problem.contestId + '-' + s.problem.index)
        );
        cfDataPayload.problemsSolved = solved.size;
      }
      if (Object.keys(cfDataPayload).length > 0) {
        setCfData(cfDataPayload);
      }
    });
  }, []);

  return (
    <section id="coding-profiles" className="bg-ap-surface py-ap-xl md:py-ap-xxl" aria-labelledby="coding-profiles-heading">
      <div className="max-w-ap mx-auto px-ap-lg">
        <SectionHeader />
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-ap-lg"
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {codingProfilesConfig.platforms.map((platform) => (
            <ProfileCard
              key={platform.id}
              platform={platform}
              liveData={platform.id === 'leetcode' ? lcData : platform.id === 'codeforces' ? cfData : null}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
