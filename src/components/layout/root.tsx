import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className="h-dvh">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};
