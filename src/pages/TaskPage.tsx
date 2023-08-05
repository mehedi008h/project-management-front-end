import { Accordion } from "@chakra-ui/react";
import { Container, TaskTableHeading, Tasks } from "../components";

const TaskPage = () => {
    return (
        <Container>
            <TaskTableHeading />
            <Accordion defaultIndex={[0]} allowMultiple>
                <Tasks header="Todo" />
                <Tasks header="Progress" />
                <Tasks header="Completed" />
            </Accordion>
        </Container>
    );
};

export default TaskPage;
