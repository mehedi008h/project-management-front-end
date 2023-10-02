import React from "react";
import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { FormHeading, UserCard } from "../../components";
import useTeammates from "../../hooks/useTeammates";

const TeamsPage = () => {
    const { data: teams, isLoading } = useTeammates();
    return (
        <Box p={5} bg="black" rounded="md" h="70vh">
            <FormHeading
                title="Youe Beloved Team Mates"
                textSize="2xl"
                subtitle="Hope you are enjoyed with them"
            />

            {isLoading ? (
                <Box
                    w="100%"
                    h="60vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Spinner color="red.500" />
                </Box>
            ) : (
                <>
                    <Box
                        w="100%"
                        h="60vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* {teams?.length === 0 && (
                            <Empty text="Don't have team member yet" />
                        )} */}
                        <Grid
                            templateColumns={{
                                xl: "repeat(2, 1fr)",
                                lg: "repeat(2, 1fr)",
                                md: "repeat(2, 1fr)",
                                base: "repeat(1, 1fr)",
                            }}
                            gap={3}
                            width="100%"
                            mt={3}
                        >
                            {teams?.pages.map((page, index) => (
                                <React.Fragment key={index}>
                                    {page?.map((user) => (
                                        <GridItem key={user._id}>
                                            <UserCard user={user} />
                                        </GridItem>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default TeamsPage;
