import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')

            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
]);


export default router;