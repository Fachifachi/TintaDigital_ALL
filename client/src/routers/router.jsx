import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import SingleBook from "../components/SingleBook";
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
  ]);

  export default router;