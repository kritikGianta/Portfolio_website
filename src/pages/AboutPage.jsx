import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FadeBlock, PageShell } from '../components/Reveal';
import {
  aboutPerspective,
  achievements,
  certifications,
  timeline,
} from '../data/siteData';

const aboutMoments = ['/about-1.jpeg', '/about-2.jpeg', '/about-3.jpeg'];

function AboutPage() {
  const [activeMoment, setActiveMoment] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMoment((current) => (current + 1) % aboutMoments.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <PageShell>
      <section className="panel rounded-[28px] p-6 md:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={aboutMoments[activeMoment]}
                  src={aboutMoments[activeMoment]}
                  alt={`About moment ${activeMoment + 1}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="h-full w-full object-contain"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-mist">
                  Real Moments
                </div>
                <div className="flex items-center gap-2">
                  {aboutMoments.map((moment, index) => (
                    <button
                      key={moment}
                      type="button"
                      onClick={() => setActiveMoment(index)}
                      className={[
                        'h-2.5 rounded-full transition-all',
                        activeMoment === index ? 'w-7 bg-ember' : 'w-2.5 bg-white/50 hover:bg-white/80',
                      ].join(' ')}
                      aria-label={`Show about moment ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <p className="chip">About</p>
            <h2 className="section-title mt-6">{aboutPerspective.title}</h2>
            <p className="section-copy mt-4">{aboutPerspective.summary}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aboutPerspective.cards.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-mist">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 panel rounded-[28px] p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="chip">Timeline</p>
            <h3 className="section-title mt-5">The chapters that shaped how I think today.</h3>
          </div>
          <p className="section-copy md:max-w-md">
            This is the simpler version of my timeline: where I studied, where I worked, and the
            steps that gradually pushed me toward the direction I now care about most.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {timeline.map((item, index) => (
            <FadeBlock key={item.phase} delay={index * 0.08}>
              <div className="grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="font-display text-2xl tracking-[-0.05em] text-white">{item.phase}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-sand">
                    {item.period}
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
              </div>
            </FadeBlock>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="panel rounded-[28px] p-6 md:p-8">
          <p className="chip">Achievements</p>
          <div className="mt-6 grid gap-3">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[28px] p-6 md:p-8">
          <p className="chip">Certifications</p>
          <div className="mt-6 grid gap-3">
            {certifications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default AboutPage;
