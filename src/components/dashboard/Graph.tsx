import { Grid, GridItem } from "@chakra-ui/react";
import { IncompleteTaskGraph, TaskStatusGraph } from "..";

const Graph = () => {
    return (
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                xl: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
            }}
            gap={8}
            marginTop={5}
            width="100%"
            height="100%"
        >
            <GridItem
                border="1px"
                rounded="md"
                borderColor="gray.600"
                height="300px"
                width="100%"
            >
                <TaskStatusGraph />
            </GridItem>
            <GridItem
                border="1px"
                rounded="md"
                borderColor="gray.600"
                height="300px"
                width="100%"
            >
                <IncompleteTaskGraph />
            </GridItem>
        </Grid>
    );
};

export default Graph;
