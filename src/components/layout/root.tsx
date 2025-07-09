import { Outlet } from 'react-router-dom';
import SearchBar from '@/components/weather/search-bar';

export const RootLayout = () => {
  return (
    <div className="h-full min-h-dvh p-4">
      <main className="h-full flex-center flex-col">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
};
