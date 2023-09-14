import { createBrowserRouter } from "react-router-dom";
import {
    CalendarPage,
    ChangePassword,
    ErrorPage,
    HomePage,
    Layout,
    ProfileLayout,
    ProfilePage,
    ProjectDetailsPage,
    ProjectPage,
    ResetPasswordPage,
    TaskPage,
    TeamsPage,
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
                path: "/projects/:projectIdentifier",
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
        path: "/reset-password/:token",
        element: <ResetPasswordPage />,
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
            {
                path: "/profile/teams",
                element: <TeamsPage />,
            },
        ],
    },
]);

export default router;
