import {
    createBrowserRouter
  
  } from "react-router-dom";
import Main from "../Main";
import Services from "../Services";
import Home from "../Home";
import Dashboard from "../Dashboard";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        // {
        //   path:"/service",
        //   element:
    
        // }
      ]

    },
    {
      path:'/dashboard',
      element:<Dashboard/>

    }
   
  ]);
  export default router;