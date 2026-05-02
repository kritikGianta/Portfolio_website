import { PageShell } from '../components/Reveal';
import { futureWork } from '../data/siteData';

function FutureWorkPage() {
  return (
    <PageShell>
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="chip">Future Work</p>
          <h2 className="section-title mt-5">What I am moving toward next.</h2>
        </div>
        <p className="section-copy md:max-w-md">
          This section reflects the three directions I genuinely want to keep building out next:
          intelligent cybersecurity assistance, wellbeing-aware AI research, and trust-focused
          systems with stronger real-world accountability.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {futureWork.map((item) => (
          <div key={item.title} className="glass-panel rounded-[28px] p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">{item.status}</p>
            <h3 className="mt-4 font-display text-3xl tracking-[-0.05em] text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}

export default FutureWorkPage;
