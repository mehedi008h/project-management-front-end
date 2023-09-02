import { Box } from "@chakra-ui/react";
import {
    Container,
    MobileTableContent,
    ProjectDetailsCard,
    ProjectDetailsSkeleton,
    TableContent,
    TaskTableHeading,
} from "../components";
import { useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import useProjectTasks from "../hooks/useProjectTasks";
import useProjectDeveloper from "../hooks/useProjectDeveloper";
import useProjectStore from "../store/useProjectStore";

const ProjectDetailsPage = () => {
    // get projectIdentifier from url
    const { projectIdentifier } = useParams();

    // fetch project, project tasks and project developers data
    const { data: project, isLoading } = useProject(projectIdentifier!);
    const { data: tasks } = useProjectTasks(projectIdentifier!);
    const { data: developers } = useProjectDeveloper(projectIdentifier!);

    // store project identifier in zustand
    const projectId = useProjectStore();
    if (projectIdentifier) projectId.projectId = projectIdentifier;

    console.log("====================================");
    console.log("Dara is:", tasks);
    console.log("====================================");

    return (
        <Container>
            {isLoading ? (
                <ProjectDetailsSkeleton />
            ) : (
                <ProjectDetailsCard project={project} developers={developers} />
            )}

            <Box
                display={{
                    base: "none",
                    xl: "block",
                    lg: "block",
                    md: "block",
                }}
            >
                <TaskTableHeading />
                <TableContent />
                <TableContent />
                <TableContent />
            </Box>
            <Box
                display={{ base: "block", xl: "none", lg: "none", md: "none" }}
                paddingBottom={3}
            >
                <MobileTableContent />
                <MobileTableContent />
            </Box>
        </Container>
    );
};

export default ProjectDetailsPage;
