import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SellerHomePage from './Components/Pages/SellerHomePage';
import PropertyPreviewPage from './Components/Pages/PropertyPreviewPage';
import PropertyDetailsForm from './Components/Pages/PropertyDetailsForm';
import Root from './Routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="/sellerHomePage" replace />,
      },
      {
        path: "/sellerHomePage",
        element: <SellerHomePage />,
      },
      {
        path: "/propertyForm",
        element: <PropertyDetailsForm />,
      },
      {
        path: "/propertyPreviewPage",
        element: <PropertyPreviewPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
