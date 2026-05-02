import { PageShell } from '../components/Reveal';
import { profile } from '../data/siteData';

function ContactPage() {
  const contactCards = [
    {
      label: 'Instagram',
      value: 'kritik._.gianta',
      note: 'A more personal side of me beyond code and projects.',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/kritikGianta',
      note: 'This is where I keep the projects, experiments, and systems I am building over time.',
    },
    {
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/kritik-gianta',
      note: 'Best place to connect with me professionally and follow my journey.',
    },
    {
      label: 'Call',
      value: '+91 8968266979',
      note: 'If something is important or urgent, this is the fastest way to reach me.',
    },
    {
      label: 'Email',
      value: 'kritikgianta88@gmail.com',
      note: 'For internships, collaborations, research discussions, or anything detailed.',
    },
  ];

  return (
    <PageShell>
      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-panel rounded-[28px] p-6 md:p-8">
          <p className="chip">Contact</p>
          <h2 className="section-title mt-6">If you want to reach me, these are the channels I actually use.</h2>
          <p className="section-copy mt-4">
            I wanted this page to feel direct and personal rather than like a generic contact form.
            Whether it is an internship, collaboration, research conversation, or just a genuine
            connection, you can reach out through whichever channel feels right.
          </p>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">A Quick Read</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>I am currently based in {profile.location}.</p>
              <p>I am always open to meaningful conversations around AI, ML, systems, and ideas worth building.</p>
              <p>If you want the quickest response, calling or emailing me is usually the best option.</p>
              <p>
                I also spend time on{' '}
                <a
                  href="https://leetcode.com/u/FjA7MMYtMk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sand hover:text-white"
                >
                  LeetCode
                </a>{' '}
                and{' '}
                <a
                  href="https://codeforces.com/profile/kritikgianta88"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sand hover:text-white"
                >
                  Codeforces
                </a>{' '}
                when I want to stay sharp on problem solving.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[28px] p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="chip">Contact Grid</p>
              <h3 className="section-title mt-5">Choose the way you want to connect with me.</h3>
            </div>
            <p className="section-copy md:max-w-sm">
              Each channel reflects a slightly different side of how I communicate, from project
              work to direct conversations and more casual updates.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="floating-outline rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-mist">{card.label}</p>
                  <span className="rounded-full border border-sand/20 bg-sand/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-sand">
                    Active
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl tracking-[-0.05em] text-white">
                  {card.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default ContactPage;
