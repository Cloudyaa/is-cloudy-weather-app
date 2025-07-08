import { Link, Outlet } from 'react-router-dom';
import { Logo } from '@/components/layout/logo';

export const RootLayout = () => {
  return (
    <div>
      <nav className="py-2 px-1 shadow">
        <Link to="/"><Logo/></Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
