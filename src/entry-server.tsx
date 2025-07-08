import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { RouterProvider } from 'react-router-dom';
import { createSSRRouter } from './router';

/** Function that will render App to HTML (used for SSR) */
export function render(url: string) {
  // Create router with the requested URL
  const router = createSSRRouter(url);

  // Create store
  const store = createStore();

  const html = renderToString(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );

  // Get the initial state to send to client
  const preloadedState = store.getState();

  return {
    html,
    preloadedState,
  };
}
