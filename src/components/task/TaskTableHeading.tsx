import { Box, Grid, GridItem } from "@chakra-ui/react";

interface Props {
    projectLeader?: boolean;
}

const TaskTableHeading = ({ projectLeader }: Props) => {
    return (
        <Box
            mt={5}
            bg="blackAlpha.700"
            rounded="md"
            marginBottom={2}
            display={{
                base: "none",
                xl: "block",
                lg: "block",
                md: "block",
            }}
        >
            <Grid templateColumns={"repeat(7, 1fr)"} gap={2}>
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
                {!projectLeader && (
                    <GridItem
                        display="flex"
                        w="100%"
                        borderRight="1px"
                        borderColor="gray.800"
                        alignItems="center"
                        justifyContent="start"
                        pl={3}
                    >
                        Status{" "}
                    </GridItem>
                )}

                <GridItem
                    display="flex"
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Remaining Days{" "}
                </GridItem>
                <GridItem
                    display="flex"
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Assign Date{" "}
                </GridItem>
                <GridItem
                    w="100%"
                    display="flex"
                    borderRight="1px"
                    borderColor="gray.800"
                    alignItems="center"
                    justifyContent="start"
                    pl={3}
                >
                    Due Date{" "}
                </GridItem>
                {projectLeader && (
                    <GridItem
                        display="flex"
                        w="100%"
                        borderRight="1px"
                        borderColor="gray.800"
                        alignItems="center"
                        justifyContent="start"
                        pl={3}
                    >
                        Action{" "}
                    </GridItem>
                )}
            </Grid>
        </Box>
    );
};

export default TaskTableHeading;
