import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { RootLayout } from '@/components/layout/root';
import { NotFoundPage } from '@/pages/not-found';
import { HomePage } from '@/pages/home';
import { CityPage } from '@/pages/city';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':city',
        element: <CityPage />,
      },
    ],
  },
];

// client router
export const createRouter = () => {
  return createBrowserRouter(routes);
};

// SSR router
export const createSSRRouter = (initialUrl: string) => {
  return createMemoryRouter(routes, {
    initialEntries: [initialUrl],
  });
};
