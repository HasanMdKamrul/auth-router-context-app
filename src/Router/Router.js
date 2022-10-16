import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";


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