import { Accordion, Box, Spinner } from "@chakra-ui/react";
import { Container, TaskTableHeading, Tasks } from "../components";
import useTasks from "../hooks/useTasks";
import { Status } from "../enums/status.enum";

const TaskPage = () => {
    const { data: tasks, isLoading } = useTasks();

    // todo tasks
    const todos = tasks?.filter((task) => task.status === Status.TODO);
    // progress tasks
    const progress = tasks?.filter((task) => task.status === Status.PROGRESS);
    // completed tasks
    const completed = tasks?.filter((task) => task.status === Status.COMPLETED);

    return (
        <Container>
            <TaskTableHeading />
            {isLoading ? (
                <Box w="100%" textAlign="center">
                    <Spinner color="red" mt={10} />
                </Box>
            ) : (
                <Accordion defaultIndex={[0]} allowMultiple>
                    <Tasks tasks={todos} header="Todo" />
                    <Tasks tasks={progress} header="Progress" />
                    <Tasks tasks={completed} header="Completed" />
                </Accordion>
            )}
        </Container>
    );
};

export default TaskPage;
