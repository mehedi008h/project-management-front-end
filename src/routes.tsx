import { createBrowserRouter } from "react-router-dom";
import {
    Auth,
    ErrorPage,
    HomePage,
    Layout,
    ProjectDetailsPage,
    ProjectPage,
    TaskPage,
} from "./pages";

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
            {
                path: "/projects/:identifier",
                element: <ProjectDetailsPage />,
            },
            {
                path: "/tasks",
                element: <TaskPage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
