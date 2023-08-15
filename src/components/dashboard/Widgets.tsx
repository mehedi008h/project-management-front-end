import { Grid, GridItem } from "@chakra-ui/react";
import { StatusCard } from "..";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Widgets = () => {
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
                    count={120}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="green" />
                    }
                />
            </GridItem>
            <GridItem>
                <StatusCard
                    text="Incompleted Tasks"
                    count={120}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="green" />
                    }
                />
            </GridItem>
            <GridItem>
                <StatusCard
                    text="Overdue Tasks"
                    count={120}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="green" />
                    }
                />
            </GridItem>
            <GridItem>
                <StatusCard
                    text="All Tasks"
                    count={120}
                    icon={
                        <IoCheckmarkDoneCircleSharp size={25} color="green" />
                    }
                />
            </GridItem>
        </Grid>
    );
};

export default Widgets;
