import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllProjects from "../components/AllProjects";
import ProjectDetals from "../components/ProjectDetals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/all-projects",
    element: <AllProjects />,
  },
  {
    path: "/project-details/:id",
    element: <ProjectDetals />,
  },
]);
export default router;
