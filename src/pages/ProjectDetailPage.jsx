import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { PageShell } from '../components/Reveal';
import { projects } from '../data/siteData';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <PageShell>
        <div className="panel rounded-[28px] p-8">
          <p className="chip">Missing Project</p>
          <h2 className="section-title mt-5">This case study placeholder does not exist yet.</h2>
          <Link to="/projects" className="mt-6 inline-flex text-sand">
            Return to projects
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="panel overflow-hidden rounded-[28px]">
          <div
            className={[
              'overflow-hidden md:h-[420px]',
              [
                'sms-classification-xlm-roberta',
                'reponexus',
                'toxic-comment-detector-xai',
                'skill-learning-ledger',
                'threatlens',
              ].includes(project.slug)
                ? 'h-[260px] bg-[#eef1fb]'
                : 'h-[300px]',
            ].join(' ')}
          >
            <img
              src={project.image}
              alt={project.title}
              className={[
                'h-full w-full',
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
          <div className="p-6 md:p-8">
            <p className="chip">{project.category}</p>
            <h2 className="section-title mt-6">{project.title}</h2>
            <p className="section-copy mt-4">{project.blurb}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.details.map((detail, index) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-mist">
                    Detail Block 0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.metrics.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-sand"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="panel rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.repo ? (
            <div className="panel rounded-[28px] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-mist">
                {project.slug === 'threatlens' ? 'Prototype Link' : 'Project Link'}
              </p>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
              >
                {project.slug === 'threatlens' ? 'Open prototype repository' : 'Open application link'}
              </a>
            </div>
          ) : null}

          <div className="panel rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">My Take</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I want these project pages to show more than just outputs. I want them to reflect how
              I think through usefulness, reliability, and whether a model actually feels practical
              when someone interacts with it.
            </p>
            <Link
              to="/projects"
              className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Back to archive
            </Link>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

export default ProjectDetailPage;
