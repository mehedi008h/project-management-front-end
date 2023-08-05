import { Box, Grid, GridItem } from "@chakra-ui/react";

const TaskTableHeading = () => {
    return (
        <Box mt={5} bg="blackAlpha.700" rounded="md" marginBottom={2}>
            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                <GridItem
                    colSpan={3}
                    w="100%"
                    h="10"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    # Task Name
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Status{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Remaining Days{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Assign Date{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Due Date{" "}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default TaskTableHeading;
