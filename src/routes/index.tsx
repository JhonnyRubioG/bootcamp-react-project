import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../views/Homepage";
import About from "../views/About";
import Contact from "../views/Contact";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />

    },
    {
        path: '/about',
        element: <About />

    },
    {
        path: '/contact',
        element: <Contact />

    }
]);

const Route = () => <RouterProvider router={routes} />;

export default Route;
