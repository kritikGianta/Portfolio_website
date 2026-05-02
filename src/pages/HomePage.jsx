import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeBlock, PageShell } from '../components/Reveal';
import {
  experience,
  futureWork,
  heroStats,
  homeNarrative,
  playgroundSignals,
  profile,
  profileModes,
  projects,
} from '../data/siteData';

function HomePage() {
  const [activeMode, setActiveMode] = useState(profileModes[0]);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeSignal, setActiveSignal] = useState(playgroundSignals[0]);
  const [activeFuture, setActiveFuture] = useState(futureWork[0]);
  const [activePortraitIndex, setActivePortraitIndex] = useState(0);
  const playgroundRef = useRef(null);
  const mouseX = useMotionValue(220);
  const mouseY = useMotionValue(160);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, rgba(217, 164, 65, 0.15), transparent 72%)`;
  const spotlightAlt = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(181, 75, 54, 0.12), transparent 72%)`;

  const signalProject = useMemo(
    () => projects.find((project) => project.slug === activeSignal.projectSlug) || projects[0],
    [activeSignal],
  );
  const isFeaturedSynced = activeProject.slug === signalProject.slug;
  const portraits = ['/profile-1.jpeg', '/profile-2.jpeg', '/profile-3.jpeg'];

  const signalToneMap = {
    yellow: {
      border: 'border-ember/60',
      bg: 'bg-[#241b11]',
      pill: 'bg-ember/15 text-ember',
    },
    orange: {
      border: 'border-sand/60',
      bg: 'bg-[#251910]',
      pill: 'bg-sand/15 text-sand',
    },
    red: {
      border: 'border-cedar/60',
      bg: 'bg-[#241412]',
      pill: 'bg-cedar/15 text-cedar',
    },
  };

  const handlePointerMove = (event) => {
    const bounds = playgroundRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePortraitIndex((current) => (current + 1) % portraits.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [portraits.length]);

  return (
    <PageShell>
      <section className="glass-panel rounded-[28px] p-6 md:p-8">
        <p className="chip">AI is the new evolution of Humans</p>
        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_360px] xl:items-start">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-5xl font-semibold leading-none tracking-[-0.08em] text-white md:text-7xl"
            >
              {profile.name}
              <span className="mt-3 block text-ember">{profile.title}.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-xl text-sm uppercase tracking-[0.28em] text-mist"
            >
              Shimla roots. India-shaped perspective. AI/ML as the long-term path.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="grid gap-4 pt-2"
            >
              {homeNarrative.map((section, sectionIndex) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34 + sectionIndex * 0.08, duration: 0.55 }}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-ember/10 blur-2xl" />
                  <div className="absolute inset-x-0 top-0 h-px accent-line opacity-60" />

                  <div className="relative z-10 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand/20 bg-sand/10 font-display text-sm text-sand">
                          0{sectionIndex + 1}
                        </span>
                        <p className="text-xs uppercase tracking-[0.28em] text-mist">
                          {section.label}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-mist">
                          Core Pull
                        </p>
                        <p className="mt-3 font-display text-2xl leading-tight tracking-[-0.05em] text-white">
                          {sectionIndex === 0
                            ? 'From moving across India to finding the one field that felt real.'
                            : 'AI is not just a tool to me. It feels like the next serious human leap.'}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <motion.div
                          key={paragraph}
                          initial={{ opacity: 0, x: 14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.42 + sectionIndex * 0.08 + paragraphIndex * 0.05,
                            duration: 0.45,
                          }}
                          className="rounded-[20px] border border-white/8 bg-black/10 px-4 py-4"
                        >
                          <p className="text-sm leading-7 text-slate-300">{paragraph}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="floating-outline relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-black/20"
          >
            <div className="absolute inset-x-0 top-0 h-px accent-line opacity-70" />
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-mist">
              Personal Frame
            </div>
            <div className="absolute right-4 top-4 z-10 rounded-full border border-ember/20 bg-ember/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-ember">
              Rotating
            </div>

            <div className="relative aspect-[4/4.7] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={portraits[activePortraitIndex]}
                  src={portraits[activePortraitIndex]}
                  alt={`${profile.name} portrait ${activePortraitIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-mist">Identity</p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.05em] text-white">
                    {profile.name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {portraits.map((portrait, index) => (
                    <button
                      key={portrait}
                      type="button"
                      onClick={() => setActivePortraitIndex(index)}
                      className={[
                        'h-2.5 rounded-full transition-all',
                        activePortraitIndex === index
                          ? 'w-7 bg-ember'
                          : 'w-2.5 bg-white/40 hover:bg-white/70',
                      ].join(' ')}
                      aria-label={`Show portrait ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-mist">Location</p>
                  <p className="mt-2 text-sm text-white">{profile.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-mist">Focus</p>
                  <p className="mt-2 text-sm text-white">AI, ML, NLP</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-mist">Mode</p>
                  <p className="mt-2 text-sm text-white">Builder + Researcher</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/projects"
            className="rounded-full border border-ember/50 bg-ember px-5 py-3 text-sm font-medium text-[#17120a] transition hover:scale-[1.02] hover:bg-[#e6b75f]"
          >
            View Work
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            About Me
          </Link>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {profileModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveMode(mode)}
              className={[
                'rounded-full border px-4 py-2 text-sm transition',
                activeMode.id === mode.id
                  ? 'border-sand bg-sand text-[#17120a]'
                  : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/30',
              ].join(' ')}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeMode.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
        >
          <div className="floating-outline rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Current Lens</p>
            <h3 className="mt-3 max-w-[15ch] font-display text-3xl tracking-[-0.05em] text-white">
              {activeMode.title}
            </h3>
            <p className="mt-4 max-w-[54ch] text-sm leading-7 text-slate-300">
              {activeMode.description}
            </p>
          </div>

          <div className="floating-outline rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Pulse</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeMode.pulse.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-sand"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/10 p-3">
                  <p className="font-display text-2xl text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        ref={playgroundRef}
        onMouseMove={handlePointerMove}
        className="glass-panel relative mt-6 overflow-hidden rounded-[28px] p-6 md:p-8"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
        <motion.div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: spotlightAlt }} />
        <div className="relative z-10 flex items-center justify-between">
          <span className="chip">Interactive Mission Board</span>
          <span className="text-xs uppercase tracking-[0.3em] text-mist">Choose a direction to explore</span>
        </div>

        <div className="relative z-10 mt-6 grid items-start gap-5 xl:grid-cols-[300px_minmax(0,1fr)_420px]">
          <div className="min-w-0 rounded-[24px] border border-white/10 bg-ink/70 p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-mist">Signals</p>
              <p className="text-xs uppercase tracking-[0.24em] text-mist">Pick one</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {playgroundSignals.map((signal, index) => {
                const tone = signalToneMap[signal.color] || signalToneMap.yellow;

                return (
                  <motion.button
                    key={signal.id}
                    type="button"
                    onClick={() => setActiveSignal(signal)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className={[
                      'rounded-[22px] border p-4 text-left transition',
                      activeSignal.id === signal.id
                        ? `${tone.border} ${tone.bg} floating-outline`
                        : 'border-white/10 bg-black/20 hover:border-white/25',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-mist">
                          {signal.level}
                        </p>
                        <p className="mt-2 font-display text-3xl leading-none tracking-[-0.05em] text-white">
                          {signal.label}
                        </p>
                      </div>
                      <span
                        className={[
                          'shrink-0 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]',
                          tone.pill,
                        ].join(' ')}
                      >
                        Live
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm leading-6 text-slate-300">
                      {signal.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.22em] text-mist">
              A quick way to see the different sides of how I think and build.
            </div>
          </div>

          <motion.div
            key={activeSignal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="danger-outline min-w-0 self-start rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-mist">Current Read</p>
              <span
                className={[
                  'rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em]',
                  (signalToneMap[activeSignal.color] || signalToneMap.yellow).pill,
                ].join(' ')}
              >
                {activeSignal.level}
              </span>
            </div>

            <h3 className="mt-4 max-w-[14ch] font-display text-[2.6rem] leading-[0.98] tracking-[-0.06em] text-white md:text-[3.35rem]">
              {activeSignal.title}
            </h3>
            <p className="mt-5 max-w-[58ch] text-sm leading-7 text-slate-300">
              {activeSignal.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeSignal.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-ember"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="min-w-0 self-start space-y-4">
            <motion.div
              key={signalProject.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="floating-outline min-w-0 rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-mist">Linked Project</p>
              <h4 className="mt-3 max-w-[14ch] font-display text-[2rem] leading-tight tracking-[-0.05em] text-white">
                {signalProject.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">{signalProject.blurb}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  key={activeSignal.id}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      activeSignal.level === 'High'
                        ? '88%'
                        : activeSignal.level === 'Active'
                          ? '76%'
                          : activeSignal.level === 'Exploring'
                            ? '64%'
                            : '82%',
                  }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-ember via-sand to-cedar"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {signalProject.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-sand"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={`${activeProject.slug}-${isFeaturedSynced ? 'synced' : 'standby'}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-w-0 rounded-[24px] border border-white/10 bg-black/20 p-4"
            >
              {isFeaturedSynced ? (
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-mist">Featured Project</p>
                    <p className="mt-2 font-display text-xl tracking-[-0.05em] text-white">
                      Synced with linked proof
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      You are already looking at the same project here, so I keep this card collapsed instead of repeating it.
                    </p>
                  </div>
                  <Link
                    to={`/projects/${signalProject.slug}`}
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Open case study
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-mist">Featured Project On Standby</p>
                    <p className="mt-2 max-w-[16ch] font-display text-2xl leading-tight tracking-[-0.05em] text-white">
                      {activeProject.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{activeProject.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(signalProject)}
                      className="rounded-full border border-ember/50 bg-ember px-4 py-2 text-sm font-medium text-[#17120a] transition hover:bg-[#e6b75f]"
                    >
                      Sync with signal
                    </button>
                    <Link
                      to={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
                    >
                      Open case study
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <FadeBlock delay={0.15}>
        <section className="mt-6">
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="chip">Internship Snapshot</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
                <h3 className="section-title">A real signal underneath the motion.</h3>
                <p className="section-copy mt-4">
                  This is the one experience block on the home page now. It keeps the landing view
                  grounded in actual work instead of stacking more project cards here.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="font-display text-2xl tracking-[-0.04em] text-white">
                  {experience.role}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {experience.company} - {experience.mode} - {experience.duration}
                </p>
                <div className="mt-4 grid gap-3">
                  {experience.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm leading-7 text-slate-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeBlock>

      <FadeBlock delay={0.2}>
        <section className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="chip">Currently Working On</p>
            <h3 className="section-title mt-6">Where I want the next chapter of the portfolio to go.</h3>
            <p className="section-copy mt-4">
              Right now, my future work is shaping around three broad directions: intelligent
              cybersecurity systems, more human-centered AI research, and trust-driven platforms
              built for real-world complexity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {futureWork.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveFuture(item)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm transition',
                    activeFuture.title === item.title
                      ? 'border-sand bg-sand text-[#17120a]'
                      : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/30',
                  ].join(' ')}
                >
                  {item.title.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeFuture.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-[28px] p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-mist">{activeFuture.status}</p>
            <h3 className="mt-4 font-display text-4xl tracking-[-0.05em] text-white">
              {activeFuture.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{activeFuture.summary}</p>
            <Link to="/future-work" className="mt-6 inline-flex text-sm text-ember">
              Open full future work section
            </Link>
          </motion.div>
        </section>
      </FadeBlock>
    </PageShell>
  );
}

export default HomePage;
