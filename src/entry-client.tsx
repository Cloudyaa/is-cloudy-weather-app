import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createRouter } from './router';
import { RouterProvider } from 'react-router-dom';
import { createStore } from '@/store';

/** Get preloaded state from server */
const preloadedState = window.__PRELOADED_STATE__;

/** Create router */
const router = createRouter();

/** Create createStore with preloaded state */
const store = createStore(preloadedState);

/** Allow the passed state to be garbage-collected */
delete window.__PRELOADED_STATE__;

/** Hydrate index.html, so App can be interactive (used for SSR) */
hydrateRoot(
  document.getElementById('root')!,
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
