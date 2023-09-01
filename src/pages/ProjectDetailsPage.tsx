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

const ProjectDetailsPage = () => {
    const { projectIdentifier } = useParams();
    const { data: project, isLoading } = useProject(projectIdentifier!);

    return (
        <Container>
            {isLoading ? (
                <ProjectDetailsSkeleton />
            ) : (
                <ProjectDetailsCard project={project} />
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
