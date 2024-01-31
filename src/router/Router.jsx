import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import Order from "../Home/Home/order/Order";
import { productsCart } from "../Home/Home/utility/ak";
import Main from "../Main/Main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,  
        },
        {
            path: "/order",
            element:<Order></Order>,  
            loader:productsCart,
        }
      ]
    },
  ]);