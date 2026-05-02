import { Link } from 'react-router-dom';
import { PageShell } from '../components/Reveal';

function NotFoundPage() {
  return (
    <PageShell>
      <div className="panel rounded-[28px] p-8">
        <p className="chip">404</p>
        <h2 className="section-title mt-5">That route is outside the draft.</h2>
        <p className="section-copy mt-4">
          The page does not exist yet, but the portfolio structure is ready to expand.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
        >
          Return home
        </Link>
      </div>
    </PageShell>
  );
}

export default NotFoundPage;
