import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Landings from "../pages/Landings";
import Page from "../pages/Page";
import Portfolio from "../pages/Portfolio";
import Docs from "../pages/Docs";
import Contact from "../pages/Contact";
import HomePage from "../components/home/HomePage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/landings",
                element: <Landings />
            },
            {
                path: "/page",
                element: <Page />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/docs",
                element: <Docs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
]);

export default Router