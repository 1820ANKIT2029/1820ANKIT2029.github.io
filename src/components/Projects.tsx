/**
 * Projects.tsx — reads all values from config.ts
 */
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { social, projectsConfig, type ProjectItem } from '../config';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const LANG_COLOR: Record<string, string> = {
  TypeScript:  'text-blue-600   bg-blue-50   border-blue-200',
  JavaScript:  'text-yellow-600 bg-yellow-50  border-yellow-200',
  Python:      'text-green-600  bg-green-50   border-green-200',
  Go:          'text-cyan-600   bg-cyan-50    border-cyan-200',
  Java:        'text-orange-600 bg-orange-50  border-orange-200',
  'C++':       'text-purple-600 bg-purple-50  border-purple-200',
  C:           'text-gray-600   bg-gray-50    border-gray-200',
};

function ProjectCard({ repo }: { repo: ProjectItem }) {
  const langClass = repo.language
    ? (LANG_COLOR[repo.language] ?? 'text-ap-secondary bg-ap-secondary/10 border-ap-secondary/20')
    : '';

  return (
    <motion.article
      variants={itemVariants}
      className="ap-surface-card rounded-xl p-ap-lg flex flex-col"
      aria-label={`Project: ${repo.name}`}
    >
      <div className="flex items-start justify-between mb-ap-md">
        <span className="material-symbols-outlined text-ap-secondary text-[32px]">folder_code</span>
        {repo.language && (
          <span className={`font-ap-mono text-[10px] uppercase tracking-widest px-ap-sm py-1 rounded border ${langClass}`}>
            {repo.language}
          </span>
        )}
      </div>

      <h3 className="font-ap-display text-ap-headline-md text-ap-on-surface mb-ap-sm">
        {repo.name.replace(/[-_]/g, ' ')}
      </h3>
      <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant flex-1 mb-ap-md">
        {repo.description ?? projectsConfig.noDescriptionFallback}
      </p>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-ap-xs mb-ap-md">
          {repo.topics.map((t) => (
            <span key={t} className="px-ap-sm py-0.5 bg-ap-surface-mid text-ap-on-surface-variant font-ap-mono text-ap-caption rounded-ap-md">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="pt-ap-md border-t border-ap-outline-variant/30 flex items-center justify-end mt-auto">
        <div className="flex items-center gap-ap-md">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
            className="text-ap-primary hover:text-ap-secondary transition-colors" aria-label="View on GitHub">
            <span className="material-symbols-outlined text-[20px]">open_in_new</span>
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
              className="text-ap-primary hover:text-ap-secondary transition-colors" aria-label="Live demo">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="bg-ap-bg py-ap-xl md:py-ap-xxl">
      <div className="max-w-ap mx-auto px-ap-lg">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-ap-xl"
        >
          <h2 className="font-ap-display text-ap-headline-lg text-ap-on-surface mb-ap-sm">
            {projectsConfig.heading}
          </h2>
          <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant max-w-[600px]">
            {projectsConfig.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-ap-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {projectsConfig.items.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
        </motion.div>

        <div className="mt-ap-xl text-center">
          <a
            href={`https://github.com/${social.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              border border-ap-outline
              font-ap-mono text-ap-caption uppercase tracking-widest
              px-ap-lg py-ap-md rounded-ap-md
              text-ap-on-surface hover:bg-ap-surface-low
              transition-colors duration-200
            "
          >
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            {projectsConfig.allRepositoriesLabel}
          </a>
        </div>
      </div>
    </section>
  );
}