import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Category from './pages/Category';
import Checkout from './pages/Checkout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/:category',
      element: <Category />,
      errorElement: <ErrorPage />,
      loader: ({ params }) => {
        const validCategories = ['headphones', 'speakers', 'earphones'];
        if (!validCategories.includes(params.category?.toLowerCase() || '')) {
          throw new Response('Not Found', { status: 404 });
        }
        return null;
      },
    },
    {
      path: '/checkout',
      element: <Checkout />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ThemeProvider storageKey='theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
