import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Empty, FormHeading, UserCard } from "../../components";
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
                "Loading"
            ) : (
                <>
                    <Box
                        w="100%"
                        h="60vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {teams?.length === 0 && (
                            <Empty text="Don't have team member yet" />
                        )}
                    </Box>
                    <Grid
                        templateColumns={{
                            xl: "repeat(2, 1fr)",
                            lg: "repeat(2, 1fr)",
                            md: "repeat(2, 1fr)",
                            base: "repeat(1, 1fr)",
                        }}
                        gap={3}
                        width="100%"
                    >
                        {teams?.map((user) => (
                            <GridItem key={user._id}>
                                <UserCard user={user} />
                            </GridItem>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
};

export default TeamsPage;
