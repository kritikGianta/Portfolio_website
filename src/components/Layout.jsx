import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems, profile } from '../data/siteData';

const pageMeta = {
  '/': 'Landing Sequence',
  '/projects': 'Project Archive',
  '/about': 'Personal Story',
  '/skills': 'My Skill Lens',
  '/future-work': 'What I Am Building Next',
  '/contact': 'Contact Channel',
};

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-4 md:px-6 lg:px-8">
      <div className="panel relative overflow-hidden rounded-[28px]">
        <div className="absolute inset-x-0 top-0 h-px accent-line opacity-80" />
        <header className="grid gap-5 border-b border-white/10 px-5 py-5 md:grid-cols-[220px_1fr] md:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-mist">Portfolio</p>
              <h1 className="font-display text-xl font-semibold tracking-[-0.05em]">{profile.name}</h1>
            </div>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="chip hidden md:inline-flex"
            >
              {pageMeta[location.pathname] || 'Project Detail'}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap gap-2 md:justify-end">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      'rounded-full border px-4 py-2 text-sm transition duration-300',
                      isActive
                        ? 'border-ember/60 bg-ember/10 text-white'
                        : 'border-white/10 text-slate-300 hover:border-white/30 hover:bg-white/5 hover:text-white',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-mist">
              <span className="h-px w-8 bg-white/15" />
              {profile.title}
            </div>
          </div>
        </header>

        <main className="px-5 py-8 md:px-8 md:py-10">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
