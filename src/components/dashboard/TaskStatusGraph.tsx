import { Box, Flex, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { DashboardTask } from "../../domain/dashboard";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    dashboardTasks?: DashboardTask;
}

const TaskStatusGraph = ({ dashboardTasks }: Props) => {
    const completeTask =
        dashboardTasks &&
        percentage(
            dashboardTasks.completedTasks.length,
            dashboardTasks.tasks.length
        );
    const incompleteTask =
        dashboardTasks &&
        percentage(
            dashboardTasks.incompletedTask.length,
            dashboardTasks.tasks.length
        );
    const overdueTask =
        dashboardTasks &&
        percentage(
            dashboardTasks.overDueTasks.length,
            dashboardTasks.tasks.length
        );

    const data = {
        labels: ["Incompleted", "Overdue", "Completed"],
        datasets: [
            {
                label: "# of Votes",
                data: [incompleteTask, overdueTask, completeTask],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Box width="100%" height="400px" p={3}>
            <Text fontSize="large" fontWeight="medium" color="gray.300">
                All Task by completion status
            </Text>
            <Flex w="full" justifyContent="center">
                <Box w="300px" h="300px" mt={5}>
                    <Pie data={data} />
                </Box>
            </Flex>
        </Box>
    );
};

const percentage = (length: number, all: number) => {
    const total = (length / all) * 100;
    return total;
};

export default TaskStatusGraph;
