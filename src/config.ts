/**
 * config.ts — Single source of truth for all portfolio content.
 *
 * ✏️  Edit this file to update your portfolio without touching any component.
 *
 * Sections:
 *   identity      — Name, tagline, role, bio, profile image
 *   social        — All external profile URLs
 *   contact       — Email address used in the contact form
 *   meta          — SEO / page-level metadata
 *   hero          — Engineering Snapshot card stats + availability text
 *   about         — Section heading & subtitle
 *   skills        — Technical Matrix categories and items
 *   codingProfiles — LeetCode + Codeforces card content
 *   projects      — Section heading, subtitle, max repos to show
 *   footer        — Copyright line
 *   nav           — Nav link labels & section anchors
 */

// ─── Identity ──────────────────────────────────────────────────────────────────
export const identity = {
  name: 'Ankit Kumar',
  /** Short role label shown as a pill badge in the Hero section */
  roleBadge: 'Backend Developer',
  /** Full headline in the Hero */
  headline: "Hi, I'm Ankit Kumar.",
  /** Hero sub-description — bold keywords are wrapped in <strong> in the component */
  tagline: 'CSE undergrad at MNNIT building scalable backend systems, distributed applications, and cloud-native platforms with a focus on',
  taglineKeywords: ['reliability', 'architectural integrity'],
  /** Short "about" subtitle shown under the About heading */
  aboutSubtitle: 'A builder who cares about correctness, performance, and clean systems.',
  /** Fallback bio used when GitHub API returns no bio */
  fallbackBio: "I'm a final-year CS student with a strong interest in backend systems, competitive programming, and open-source development. I love building things that scale.",
  /** Profile image path (relative to /public) */
  profileImage: '/profile.jpeg',
  /** Your college / institution */
  institution: 'MNNIT Allahabad',
  /** Academic label shown in the About card */
  academicLabel: 'CSE Undergrad (Final Year) · MNNIT Allahabad',
  /** Availability blurb in the Hero snapshot card footer */
  availabilityText: 'Open to Full-Time Roles',
  /** Currently learning text for the About section */
  currentlyLearning: 'Microservice, NLP, Kubernetes',
};

// ─── Social / External profiles ────────────────────────────────────────────────
export const social = {
  githubUsername: '1820ankit2029',
  linkedinHandle: 'ankit-3057-cse',
  codeforceHandle: 'AGENTVEER',
  /** LeetCode username (if different from githubUsername, set explicitly) */
  leetcodeUsername: 'Ankit3057cse',
  twitterHandle: '',                             // leave empty to hide
  emailAddress: 'ankitkumar00002250908@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1fgL5nS_ZPtwrYtoxYuKTBzE2_1tvpiC2',
};

// ─── Derived URLs (built from `social` — do not edit directly) ─────────────────
export const urls = {
  github: `https://github.com/${social.githubUsername}`,
  linkedin: `https://linkedin.com/in/${social.linkedinHandle}`,
  codeforces: `https://codeforces.com/profile/${social.codeforceHandle}`,
  leetcode: `https://leetcode.com/u/${social.leetcodeUsername}`,
  twitter: social.twitterHandle ? `https://twitter.com/${social.twitterHandle}` : '',
  email: `mailto:${social.emailAddress}`,
};

// ─── Competitive Programming Stats (Single Source of Truth) ────────────────────
export const competitiveStats = {
  codeforces: {
    rating: 1400,
    maxRating: 1550,
    rank: 'Specialist',
    roundsParticipated: '50+',
    problemsSolved: '500+',
  },
  leetcode: {
    rating: 1850,
    badge: 'Knight',
    problemsSolved: '600+',
  }
};

// ─── SEO / Meta ────────────────────────────────────────────────────────────────
export const meta = {
  siteTitle: 'Ankit Kumar — Portfolio',
  description: 'Portfolio of Ankit Kumar, CSE student at MNNIT with expertise in backend systems and competitive programming.',
  keywords: 'Ankit Kumar, Portfolio, MNNIT, Backend Developer, React, Go, Java',
  ogImage: 'https://1820ankit2029.github.io/profile.jpeg',
  ogUrl: 'https://1820ankit2029.github.io',
};

// ─── Navigation ────────────────────────────────────────────────────────────────
export const nav = {
  brandName: identity.name,
  resumeLabel: 'Resume',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Coding Profiles', href: '#coding-profiles' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

// ─── Hero section ──────────────────────────────────────────────────────────────
export const heroConfig = {
  snapshotHeading: 'Engineering Snapshot',
  /** Rows in the "Engineering Snapshot" card on the right */
  snapshotRows: [
    { label: 'Academic Standing', value: 'B.Tech CSE (4th Year)' },
    { label: 'Engineering Focus', value: 'Backend Systems' },
    { label: 'Problem Solving', value: `${competitiveStats.codeforces.rank} (Codeforces)` },
    { label: 'Availability', value: 'Full-Time SDE Roles' },
  ],
  /** Material icon names shown in the icon stack row */
  snapshotIcons: ['code', 'cloud', 'database'],
  /** LeetCode badge label shown in snapshot card footer */
  leetcodeBadge: competitiveStats.leetcode.badge,
  /** Codeforces badge label shown in snapshot card footer */
  codeforcesBadge: competitiveStats.codeforces.rank,
  ctaPrimary: { label: 'View Projects', href: '#projects' },
  ctaSecondary: { label: 'Get in Touch', href: '#contact' },
};

// ─── About section ─────────────────────────────────────────────────────────────
export const aboutConfig = {
  heading: 'About Me',
  subtitle: identity.aboutSubtitle,
  resumeLabel: 'Resume',
  linkedinLabel: 'LinkedIn',
  githubLabel: 'GitHub',
  codeforcesLabel: 'Codeforces',
  stats: {
    github: {
      publicRepos: 'Public Repos',
      followers: 'Followers',
      defaults: {
        publicRepos: 15,
        followers: 10,
      }
    },
    codeforces: {
      rating: 'Rating',
      maxRating: 'Max Rating',
      rank: 'Rank',
      defaults: {
        rating: competitiveStats.codeforces.rating,
        maxRating: competitiveStats.codeforces.maxRating,
        rank: competitiveStats.codeforces.rank,
      }
    }
  }
};

// ─── Skills section ────────────────────────────────────────────────────────────
export interface SkillCategory {
  icon: string;   // Material Symbols icon name
  title: string;
  items: string[];
}

export const skillsConfig = {
  heading: 'Technical Matrix',
  subtitle: 'Core competencies across the engineering lifecycle.',
  categories: [
    {
      icon: 'code',
      title: 'Languages',
      items: ['C / C++', 'Java', 'Python', 'JavaScript / TS', 'Go'],
    },
    {
      icon: 'layers',
      title: 'Frameworks',
      items: ['Spring Boot', 'FastAPI', 'Node.js / Express', 'Next.js'],
    },
    {
      icon: 'database',
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    },
    {
      icon: 'cloud_done',
      title: 'Architecture',
      items: ['Docker & K8s', 'AWS / Azure', 'CI/CD Pipelines', 'System Design', 'Microservices'],
    },
  ] as SkillCategory[],
};

// ─── Coding Profiles section ───────────────────────────────────────────────────
export interface CodingStatRow {
  label: string;
  value: string;
}

export interface CodingPlatform {
  id: string;
  name: string;
  accentClass: string;
  dotBg: string;
  icon: string;   // Material Symbols icon name
  stats: CodingStatRow[];
  href: string;
}

export const codingProfilesConfig = {
  heading: 'Coding Profiles',
  subtitle: 'Competitive programming performance and algorithmic problem-solving metrics.',
  viewProfileLabel: 'View Profile',
  platforms: [
    {
      id: 'leetcode',
      name: 'LeetCode',
      accentClass: 'text-yellow-600',
      dotBg: 'bg-yellow-500/5',
      icon: 'leetcode',
      stats: [
        { label: 'Problems Solved', value: competitiveStats.leetcode.problemsSolved },
        { label: 'Contest Rating', value: competitiveStats.leetcode.rating.toString() },
      ],
      href: urls.leetcode,
    },
    {
      id: 'codeforces',
      name: 'Codeforces',
      accentClass: 'text-ap-secondary',
      dotBg: 'bg-ap-secondary/5',
      icon: 'codeforces',
      stats: [
        { label: 'Problems Solved', value: competitiveStats.codeforces.problemsSolved },
        { label: 'Max Rating', value: competitiveStats.codeforces.maxRating.toString() },
        { label: 'Rounds Participated', value: competitiveStats.codeforces.roundsParticipated },
      ],
      href: urls.codeforces,
    },
  ] as CodingPlatform[],
};

// ─── Projects section ──────────────────────────────────────────────────────────
export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

export const projectsConfig = {
  heading: 'Selected Projects',
  subtitle: 'Featured open-source work and engineering projects.',
  noDescriptionFallback: 'No description provided.',
  allRepositoriesLabel: 'All Repositories',
  items: [
    {
      id: 'Microservices-Ticket-Booking-System',
      name: 'Microservices Ticket Booking System',
      description: 'A cloud-native event ticket booking platform built with Spring Boot microservices, Spring Cloud, Kafka, Redis, PostgreSQL, and Next.js. Designed using domain-driven architecture with API Gateway, service discovery, centralized configuration, asynchronous event-driven communication, and secure JWT authentication.',
      html_url: 'https://github.com/1820ANKIT2029/Microservices-Ticket-Booking-System',
      homepage: null,
      language: 'Java',
      stargazers_count: 0,
      topics: [
        'java',
        'spring-boot',
        'spring-cloud',
        'microservices',
        'distributed-systems',
        'kafka',
        'redis',
        'postgresql',
        'spring-security',
        'jwt',
        'eureka',
        'config-server',
        'api-gateway',
        'openfeign',
        'docker',
        'nextjs',
        'typescript',
        'ticket-booking',
        'event-driven-architecture',
        'cloud-native'
      ]
    },
    {
      id: 'Palu-Web',
      name: 'Palu',
      description: 'A modern Loom-inspired video collaboration platform for recording, managing, and sharing screen recordings. Built with Next.js, Clerk authentication, S3 cloud storage, Neon PostgreSQL, and a scalable architecture with desktop recording and backend video processing services.',
      html_url: 'https://github.com/1820ANKIT2029/Palu-Web',
      homepage: null,
      language: 'TypeScript',
      stargazers_count: 0,
      topics: [
        'nextjs',
        'typescript',
        'react',
        'tailwindcss',
        'clerk',
        'neon',
        'postgresql',
        'aws-s3',
        'docker'
      ]
    },
    {
      id: 'FaceID-Tracker',
      name: 'FaceID Tracker',
      description: 'An AI-powered face recognition and verification system that uses a Siamese Neural Network to compare facial embeddings for accurate identity verification, attendance tracking, and biometric authentication.',
      html_url: 'https://github.com/1820ANKIT2029/FaceID-Tracker',
      homepage: null,
      language: 'Python',
      stargazers_count: 0,
      topics: [
        'python',
        'siamese-neural-network',
        'deep-learning',
        'computer-vision',
        'face-recognition',
        'face-verification',
        'opencv',
        'tensorflow',
        'keras',
        'attendance-system'
      ]
    },
    {
      id: 'CampusSync',
      name: 'CampusSync',
      description: 'A full-stack campus management and student productivity platform built during CodeSangam 2024. It gamifies academic life with event management, attendance tracking, student profiles, real-time notifications, authentication, and cloud-based media storage.',
      html_url: 'https://github.com/1820ANKIT2029/CampusSync',
      homepage: null,
      language: 'JavaScript',
      stargazers_count: 3,
      topics: [
        'javascript',
        'nodejs',
        'express',
        'react',
        'vite',
        'mongodb',
        'socketio',
        'oauth',
        'cloudinary',
        'codesangam-2024'
      ]
    },
    {
      id: 'EDA-portfolio',
      name: 'EDA Portfolio',
      description: 'A comprehensive Exploratory Data Analysis portfolio showcasing real-world datasets, data cleaning, statistical analysis, interactive visualizations, and actionable business insights using Python, Pandas, NumPy, Matplotlib, and Seaborn.',
      html_url: 'https://github.com/1820ANKIT2029/EDA-portfolio',
      homepage: null,
      language: 'Python',
      stargazers_count: 2,
      topics: [
        'python',
        'data-analysis',
        'exploratory-data-analysis',
        'pandas',
        'numpy',
        'matplotlib',
        'seaborn',
        'statistics',
        'data-visualization',
        'jupyter-notebook'
      ]
    },
    {
      id: 'portfolio',
      name: 'My Portfolio',
      description: 'Personal portfolio website built with React, Vite, and Tailwind CSS.',
      html_url: 'https://github.com/1820ankit2029/1820ANKIT2029.github.io',
      homepage: 'https://1820ankit2029.github.io/',
      language: 'TypeScript',
      stargazers_count: 2,
      topics: ['react', 'tailwind', 'framer-motion'],
    },
    {
      id: 'AuraPlay',
      name: 'AuraPlay',
      description: 'A full-stack Spotify-inspired music streaming platform featuring secure authentication, real-time user activity, chat functionality, cloud-based music storage, and an admin dashboard for music management.',
      html_url: 'https://github.com/1820ANKIT2029/AuraPlay',
      homepage: null,
      language: 'JavaScript',
      stargazers_count: 0,
      topics: [
        'react',
        'vite',
        'nodejs',
        'express',
        'mongodb',
        'socketio',
        'zustand',
        'cloudinary',
        'clerk',
        'real-time'
      ]
    },
  ] as ProjectItem[],
};

// ─── Contact section ───────────────────────────────────────────────────────────
export const contactConfig = {
  heading: "Let's build reliable software together.",
  subtitle: 'Open to internships and full stack roles. If you have an interesting problem — let\'s talk.',
  toEmail: social.emailAddress,
  /** Social icon links rendered in the contact card */
  socialLinks: [
    { label: 'LinkedIn', icon: 'linkedin', href: urls.linkedin },
    { label: 'GitHub', icon: 'github', href: urls.github },
    { label: 'LeetCode', icon: 'leetcode', href: urls.leetcode },
    { label: 'Codeforces', icon: 'codeforces', href: urls.codeforces },
  ],
  /** Placeholder texts for the form inputs */
  placeholders: {
    name: 'Ankit Kumar',
    email: 'you@company.com',
    message: 'Tell me about your project or opportunity...',
  },
  formLabels: {
    name: 'Full Name',
    email: 'Email Address',
    message: 'Message',
    submit: 'Send Message'
  },
  toastMessages: {
    success: 'Opening Gmail to send your message!',
    errorEmpty: 'Please fill in all fields.',
    errorEmail: 'Please enter a valid email address.'
  },
  gmailSubjectTemplate: (name: string) => `Portfolio enquiry from ${name}`,
  gmailBodyTemplate: (name: string, email: string, message: string) =>
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
};

// ─── Footer ────────────────────────────────────────────────────────────────────
export const footerConfig = {
  brand: identity.name,
  copyright: `© ${new Date().getFullYear()} ${identity.name}.`,
  links: [
    { label: 'LinkedIn', href: urls.linkedin },
    { label: 'GitHub', href: urls.github },
    { label: 'LeetCode', href: urls.leetcode },
    { label: 'Codeforces', href: urls.codeforces },
  ],
};

// ─── Legacy default export (backward-compat for any remaining imports) ─────────
const config = {
  githubUsername: social.githubUsername,
  linkedinHandle: social.linkedinHandle,
  codeforceHandle: social.codeforceHandle,
  resumeGdriveLink: social.resumeUrl,
  siteTitle: meta.siteTitle,
};

export default config;