import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../views/Homepage";
import Contact from "../views/Contact";
import About from "../views/AboutUs";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />

    },
    {
        path: '/contact',
        element: <Contact />

    },
    {
        path: '/about',
        element: <About />

    }
]);

const Route = () => <RouterProvider router={routes} />;

export default Route;
