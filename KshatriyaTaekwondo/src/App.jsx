import './App.css'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import {RootLayout} from './pages/RootLayout.jsx';
import {Contact} from './pages/Contact.jsx';
import {OurServices} from './pages/OurServices.jsx';
import {Gallery} from './pages/Gallery.jsx';
import {Blog} from './pages/Blog.jsx';
import { AdminLogin } from './components/AdminLogin.jsx';
import { AdminStudentDetails } from './components/AdminStudentDetails.jsx';

function ProtectedAdminRoute({ children }) {
  const jwtToken = useSelector((state) => state.jwt.jwtToken);

  if (!jwtToken) {
    return <Navigate to="/Home/AdminLogin" replace />;
  }

  return children;
}


function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Navigate to="/Home" replace /> },
    {
      path: '/Home',
      element: <RootLayout />,
      children: [
        // renders Home at /Home
        { index: true, element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Gallery', element: <Gallery /> },
        { path: 'OurServices', element: <OurServices /> },
        { path: 'Contact', element: <Contact /> },
        { path: 'blog', element: <Blog /> },
        // admin routes inside layout so header/footer stay visible
        { path: 'AdminLogin', element: <AdminLogin /> },
        {
          path: 'AdminStudentDetails',
          element: (
            <ProtectedAdminRoute>
              <AdminStudentDetails />
            </ProtectedAdminRoute>
          )
        }
      ]
    }
  ]);

  // renders the router provider so all Link/Route components have context
  return <RouterProvider router={router} />;
}

export default App
