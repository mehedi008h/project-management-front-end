import { Grid, GridItem } from "@chakra-ui/react";
import { StatusCard } from "..";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import useDashboardTask from "../../hooks/useDashboardTask";

const Widgets = () => {
    const { data: tasks } = useDashboardTask();
    return (
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                xl: "repeat(4, 1fr)",
                lg: "repeat(4, 1fr)",
                md: "repeat(4, 1fr)",
            }}
            gap={8}
        >
            <GridItem>
                <StatusCard
                    text="Completed Tasks"
                    count={tasks?.completedTasks.length}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="green" />
                    }
                />
            </GridItem>
            <GridItem>
                <StatusCard
                    text="Incompleted Tasks"
                    count={tasks?.incompletedTask.length}
                    icon={<IoCheckmarkDoneCircleSharp size={25} color="red" />}
                />
            </GridItem>
            <GridItem>
                <StatusCard
                    text="Overdue Tasks"
                    count={tasks?.overDueTasks.length}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="maroon" />
                    }
                />
            </GridItem>
            <GridItem>
                <StatusCard text="All Tasks" count={tasks?.tasks.length} />
            </GridItem>
        </Grid>
    );
};

export default Widgets;
