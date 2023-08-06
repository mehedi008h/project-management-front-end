import { Box } from "@chakra-ui/react";
import {
    Container,
    MobileTableContent,
    ProjectDetailsCard,
    TableContent,
    TaskTableHeading,
} from "../components";

const ProjectDetailsPage = () => {
    return (
        <Container>
            <ProjectDetailsCard />
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
