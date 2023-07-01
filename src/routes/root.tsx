import {
    createBrowserRouter,
     } from "react-router-dom";
import HomePage from "../pages/home-page";
import Home2 from "../pages/home2";
import LoginPage from "../pages/login-page";
import DLayout from "../pages/dashboard/d-layout";
import  DHome  from "../pages/dashboard/d-home";
import DRoom  from "../pages/dashboard/d-room";
import Typepage from "../pages/type-page";



     const router = createBrowserRouter([
        {
          path: '/',
          element: <HomePage />
        
        },
        {
          path: '/home2',
          element: <Home2 />
        
        },
        {
          path: '/type',
          element: <Typepage />
        
        },
        {
          path: '/Login',
          element: <LoginPage />
        
        },
        {
          path: '/dashboard',
          element: <DLayout />,
          children:[
            {
              path: '',
              element: <DHome />
            
            }, 
            {
              path: 'room',
              element: <DRoom />
            
            }, 
          ]
        
        },
        {
            path: '/home2',
            element: <Home2 />
          
          },
       
      ]);
export default router;
