import { createBrowserRouter } from "react-router-dom";
import {
    Auth,
    CalendarPage,
    ChangePassword,
    ErrorPage,
    HomePage,
    Layout,
    ProfileLayout,
    ProfilePage,
    ProjectDetailsPage,
    ProjectPage,
    TaskPage,
} from "./pages";
import PortfolioPage from "./pages/profile/PortfolioPage";

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
            {
                path: "/calendar",
                element: <CalendarPage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
            {
                index: true,
                element: <ProfilePage />,
            },
            {
                path: "/profile/portfolio",
                element: <PortfolioPage />,
            },
            {
                path: "/profile/change-password",
                element: <ChangePassword />,
            },
        ],
    },
]);

export default router;
