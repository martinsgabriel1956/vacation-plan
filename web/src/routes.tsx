import { createBrowserRouter } from 'react-router-dom';
import { Home } from './view/pages';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);