import {
    Container,
    ProjectDetailsCard,
    TableContent,
    TaskTableHeading,
} from "../components";

const ProjectDetailsPage = () => {
    return (
        <Container>
            <ProjectDetailsCard />
            <TaskTableHeading />
            <TableContent />
            <TableContent />
            <TableContent />
        </Container>
    );
};

export default ProjectDetailsPage;
