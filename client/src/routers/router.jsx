import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import SingleBook from "../components/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import EditBook from "../dashboard/EditBook";
import ManageBooks from "../dashboard/ManageBooks";
import UploadBook from "../dashboard/UploadBook";
  import Home from "../home/Home";
import RegisterForm from "../register/RegisterForm";
  import Shop from "../shop/Shop";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
          path: '/register',
          element: <RegisterForm/>
        },
        {
          path: '/book/:id',
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
        
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    }
  ]);

  export default router;