import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Root';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import AuthProvider from './authProvider/AuthProvider';
import Features from './pages/Features';
import About from './pages/About';
import Programs from './pages/Programs';
import NewsEvents from './pages/NewsEvents';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NewsDetails from './components/NewsDetails';
import Scholarships from './pages/Scholarships';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/features',
        element: <Features />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/programs',
        element: <Programs />,
        loader:()=>fetch('./programs.json')
      },
      {
        path: '/newsEvents',
        element: <NewsEvents />,
        loader: () => fetch('./news.json'),
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/newsEvents/:id',
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        loader: () => fetch('../news.json'),
      },
      {
        path:'/scholarships',
        element:<Scholarships/>
      },
      {
        path: '/profile',
        element: <Profile />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
