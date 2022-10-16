import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Orders from "../components/Orders";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
               path:'/',
                element: <Home/>
            },
            {
               path:'/home',
                element: <Home/>
            },
            {
               path:'/orders',
                element: <PrivateRoute> <Orders/> </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])