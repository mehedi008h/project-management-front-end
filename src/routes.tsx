import { createBrowserRouter } from "react-router-dom";
import { Auth, ErrorPage, HomePage, Layout, ProjectPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectPage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
