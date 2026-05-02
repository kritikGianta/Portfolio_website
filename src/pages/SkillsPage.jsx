import { motion } from 'framer-motion';
import { FadeBlock, PageShell } from '../components/Reveal';
import { skillGroups } from '../data/siteData';

const personalViews = [
  {
    label: 'How I see my skills',
    title: 'I do not like thinking of skills as numbers.',
    copy:
      'For me, skills make more sense as areas I keep returning to: learning, building, experimenting, and making things work properly.',
  },
  {
    label: 'How I usually work',
    title: 'I learn best by building, breaking, and refining things in public-facing ways.',
    copy:
      'That is why my work naturally moves between AI, software systems, research thinking, and product-oriented problem solving instead of staying in one narrow lane.',
  },
];

const skillThemes = [
  {
    title: 'Learning Systems',
    detail: 'Machine learning, deep learning, language-focused work, and the curiosity that keeps pulling me deeper into intelligent systems.',
    accent: 'amber',
  },
  {
    title: 'Research Mindset',
    detail: 'I enjoy asking why something works, measuring it properly, and pushing ideas until they become evidence instead of assumptions.',
    accent: 'cedar',
  },
  {
    title: 'Builder Energy',
    detail: 'I like taking concepts beyond notebooks and turning them into usable flows, interfaces, and systems that feel complete.',
    accent: 'ember',
  },
  {
    title: 'Data Comfort',
    detail: 'Cleaning, structuring, observing patterns, and working patiently through the raw material behind better decisions.',
    accent: 'stone',
  },
  {
    title: 'Engineering Discipline',
    detail: 'Versioning, containers, experiments, and practical habits that make work easier to revisit, improve, and trust.',
    accent: 'amber',
  },
  {
    title: 'Broader Perspective',
    detail: 'I am interested not only in AI itself, but also in how it connects with trust, systems, people, and long-term impact.',
    accent: 'cedar',
  },
];

const valuesAroundWork = [
  'I care about clarity as much as capability.',
  'I like work that connects technical depth with human usefulness.',
  'I am drawn to ideas that feel bigger than a single tool or trend.',
  'I want to keep growing into work that is thoughtful, useful, and worth remembering.',
];

const personalTraits = [
  {
    title: 'Adaptability',
    copy:
      'Growing up across different places made me comfortable with change, quick learning, and stepping into unfamiliar spaces without feeling stuck.',
  },
  {
    title: 'Curiosity',
    copy:
      'A lot of my direction came from exploring different fields before realizing what genuinely pulled me in the deepest.',
  },
  {
    title: 'Ownership',
    copy:
      'When I work on something, I do not want to stop at the idea stage. I want to understand it well enough to shape it properly.',
  },
];

const techStackGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++'],
  },
  {
    label: 'AI and Data',
    items: ['PyTorch', 'Transformers', 'scikit-learn', 'LangChain', 'NumPy', 'Pandas'],
  },
  {
    label: 'Infra and MLOps',
    items: ['Docker', 'MLflow', 'DVC', 'GitHub Actions', 'AWS', 'Kubernetes'],
  },
  {
    label: 'Tools and Databases',
    items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Matplotlib', 'Seaborn'],
  },
];

function SkillsPage() {
  return (
    <PageShell>
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="chip">Skills</p>
          <h2 className="section-title mt-5">A more personal read of how I work and what I keep getting better at.</h2>
        </div>
        <p className="section-copy md:max-w-md">
          I wanted this section to feel less like a checklist and more like a real snapshot of how
          I think, learn, and build.
        </p>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <FadeBlock key={group.title} delay={groupIndex * 0.05}>
            <div className="panel rounded-[28px] p-6">
              <p className="font-display text-3xl tracking-[-0.05em] text-white">{group.title}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: groupIndex * 0.08 + index * 0.04, duration: 0.35 }}
                    whileHover={{ y: -3 }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeBlock>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <FadeBlock>
          <div className="panel rounded-[28px] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="chip">My Perspective</p>
                <h3 className="section-title mt-5">The way I think about my skills is broader than tools alone.</h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-slate-400">
                These are the themes that keep showing up in the way I learn, build, and choose the
                kind of work I want to grow into.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skillThemes.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  whileHover={{ y: -6 }}
                  className={[
                    'group relative overflow-hidden rounded-[24px] border border-white/10 p-5',
                    item.accent === 'amber'
                      ? 'bg-sand/12'
                      : item.accent === 'cedar'
                        ? 'bg-cedar/14'
                        : item.accent === 'ember'
                          ? 'bg-ember/14'
                          : 'bg-white/[0.035]',
                  ].join(' ')}
                >
                  <motion.div
                    animate={{ x: ['-10%', '110%'] }}
                    transition={{
                      duration: 4 + index * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: 'easeInOut',
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
                  />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-mist/80">Theme</p>
                      <p className="mt-3 font-display text-2xl tracking-[-0.05em] text-white">
                        {item.title}
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-sand to-ember pulse-glow" />
                  </div>
                  <p className="relative z-10 mt-4 text-sm leading-7 text-slate-300">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="chip">Tech Stack</p>
                  <p className="mt-4 font-display text-3xl tracking-[-0.05em] text-white">
                    The tools I keep close while building.
                  </p>
                </div>
                <p className="max-w-sm text-sm leading-7 text-slate-400">
                  This is the more direct layer: the languages, frameworks, data tools, and
                  engineering systems I have worked with so far.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {techStackGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.08 + groupIndex * 0.06, duration: 0.4 }}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-mist">{group.label}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.94 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{
                            delay: 0.14 + groupIndex * 0.05 + itemIndex * 0.03,
                            duration: 0.3,
                          }}
                          whileHover={{ y: -3, scale: 1.03 }}
                          className="rounded-full border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-3 py-2 text-sm text-slate-200"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeBlock>

        <div className="grid gap-6">
          <FadeBlock delay={0.05}>
            <div className="panel rounded-[28px] p-6 md:p-8">
              <p className="chip">A Better Read</p>
              <div className="mt-6 space-y-5">
                {personalViews.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.08 + index * 0.08, duration: 0.4 }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-mist">{signal.label}</p>
                    <p className="mt-3 font-display text-2xl tracking-[-0.05em] text-white">
                      {signal.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{signal.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeBlock>

          <FadeBlock delay={0.1}>
            <div className="panel rounded-[28px] p-6 md:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="chip">What Sits Around The Skills</p>
                  <p className="mt-5 font-display text-3xl tracking-[-0.05em] text-white">
                    The way I work is shaped by more than technical practice alone.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {personalTraits.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
                    whileHover={{ y: -5 }}
                    className="rounded-[22px] border border-white/10 bg-black/20 p-5"
                  >
                    <p className="font-display text-2xl tracking-[-0.05em] text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {valuesAroundWork.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.16 + index * 0.06, duration: 0.35 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sand to-ember" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeBlock>
        </div>
      </section>
    </PageShell>
  );
}

export default SkillsPage;
