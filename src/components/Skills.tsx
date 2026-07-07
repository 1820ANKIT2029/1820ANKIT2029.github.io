/**
 * Skills.tsx — reads all values from config.ts
 */
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { skillsConfig, type SkillCategory } from '../config';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function SkillCard({ category, delay = 0 }: { category: SkillCategory; delay?: number }) {
  return (
    <motion.div variants={itemVariants} transition={{ delay }} className="ap-surface-card rounded-xl p-ap-lg">
      <div className="w-10 h-10 rounded-ap-lg bg-ap-surface-high flex items-center justify-center mb-ap-md">
        <span className="material-symbols-outlined text-ap-secondary">{category.icon}</span>
      </div>
      <h4 className="font-ap-display text-ap-headline-md text-ap-on-surface mb-ap-md">
        {category.title}
      </h4>
      <ul className="space-y-ap-sm">
        {category.items.map((item) => (
          <li key={item} className="flex items-center gap-2 font-ap-mono text-ap-caption text-ap-on-surface-variant">
            <div className="w-1.5 h-1.5 bg-ap-outline-variant flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="bg-ap-bg py-ap-xl md:py-ap-xxl">
      <div className="max-w-ap mx-auto px-ap-lg">

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={itemVariants} className="mb-ap-xl">
          <h2 className="font-ap-display text-ap-headline-lg text-ap-on-surface mb-ap-sm">
            {skillsConfig.heading}
          </h2>
          <p className="font-ap-body text-ap-body-md text-ap-on-surface-variant max-w-[600px]">
            {skillsConfig.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-ap-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {skillsConfig.categories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} delay={i * 0.05} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}