import { Grid, GridItem } from "@chakra-ui/react";
import { Empty, UserCard } from "../../components";
import useTeammates from "../../hooks/useTeammates";

const TeamsPage = () => {
    const { data: teams, isLoading } = useTeammates();
    return (
        <Grid
            templateColumns={{
                xl: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
            }}
            gap={3}
        >
            {isLoading ? (
                "Loading"
            ) : (
                <>
                    {teams?.length === 0 && (
                        <Empty text="Don't have team member yet" />
                    )}
                    {teams?.map((user) => (
                        <GridItem key={user._id}>
                            <UserCard user={user} />
                        </GridItem>
                    ))}
                </>
            )}
        </Grid>
    );
};

export default TeamsPage;
