import { Link, Outlet } from 'react-router-dom';
import { Logo } from '@/components/layout/logo';

export const RootLayout = () => {
  return (
    <div className="h-dvh">
      <nav className="py-2 px-1 shadow h-10">
        <Link to="/"><Logo/></Link>
      </nav>
      <main className="h-[calc(100dvh-40px)]">
        <Outlet />
      </main>
    </div>
  );
};
