import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FloatBlock, PageShell } from '../components/Reveal';
import { projects, researchPapers } from '../data/siteData';

function ProjectsPage() {
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageShell>
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="chip">Projects</p>
          <h2 className="section-title mt-5">A closer look at the things I have built and the ones I am still shaping.</h2>
        </div>
        <p className="section-copy md:max-w-md">
          Some of these are finished, some are still growing, but all of them reflect the kind of
          problems I enjoy working on.
        </p>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={[
              'rounded-full border px-4 py-2 text-sm transition',
              activeCategory === category
                ? 'border-sand bg-sand text-[#0b1720]'
                : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/30',
            ].join(' ')}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FloatBlock key={project.slug} delay={index * 0.06}>
            <Link
              to={`/projects/${project.slug}`}
              className="group panel block h-full overflow-hidden rounded-[28px]"
            >
              <div className="grid h-full gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="min-h-[260px] lg:h-full overflow-hidden bg-black/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={[
                      'h-full w-full transition duration-700 group-hover:scale-105',
                      [
                        'sms-classification-xlm-roberta',
                        'reponexus',
                        'toxic-comment-detector-xai',
                        'skill-learning-ledger',
                        'threatlens',
                      ].includes(project.slug)
                        ? 'object-contain p-4'
                        : 'object-cover',
                    ].join(' ')}
                  />
                </div>
                <div className="flex h-full min-h-[260px] flex-col justify-between p-6 md:p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs uppercase tracking-[0.28em] text-mist">
                        {project.category}
                      </p>
                      <span
                        className={[
                          'rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.24em]',
                          project.status === 'Completed'
                            ? 'border border-sand/20 bg-sand/10 text-sand'
                            : 'border border-white/10 bg-white/[0.04] text-slate-300',
                        ].join(' ')}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-300">
                      {project.blurb}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.metrics.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-sand transition group-hover:translate-x-1">
                      View project
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FloatBlock>
        ))}
      </section>

      <section className="mt-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="chip">Research Papers</p>
            <h3 className="section-title mt-5">Research ideas I want to take seriously as papers and longer-form work.</h3>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {researchPapers.map((paper, index) => (
            <FloatBlock key={paper.title} delay={index * 0.06}>
              <div className="panel flex h-full min-h-[320px] flex-col rounded-[28px] p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-mist">{paper.status}</p>
                <h4 className="mt-4 font-display text-3xl tracking-[-0.05em] text-white">
                  {paper.title}
                </h4>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{paper.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {paper.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {paper.repo ? (
                  <a
                    href={paper.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Open experiment link
                  </a>
                ) : null}
              </div>
            </FloatBlock>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default ProjectsPage;
