import { useRoutes } from 'react-router-dom';
import Community from './pages/Community';
import DefaultLayout from './pages/DefaultLayout';
import Home from './pages/Home';
import WriteComplaint from './pages/WriteComplaint';
import Profile from './pages/Profile';
import ViewComplaint from './pages/ViewComplaint';
import ViewMore from './pages/ViewMore';

function App() {
  const element = useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/WriteComplaint',
          element: <WriteComplaint />,
        },
        {
          path: '/Community',
          element: <Community />,
        },
        {
          path: '/Profile',
          element: <Profile />,
        },
        {
          path: '/ViewComplaint/:id',
          element: <ViewComplaint />,
        },
        {
          path: '/ViewMore/:subcategory',
          element: <ViewMore />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
