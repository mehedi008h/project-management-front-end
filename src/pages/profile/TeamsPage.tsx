import { Grid, GridItem } from "@chakra-ui/react";
import { Empty, UserCard } from "../../components";
import useTeammates from "../../hooks/useTeamMates";
import { toast } from "react-hot-toast";

const TeamsPage = () => {
    const { data: teams, isLoading, error } = useTeammates();
    // send error message
    if (error) toast.error(error.message);
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
                        <GridItem key={user.id}>
                            <UserCard user={user} />
                        </GridItem>
                    ))}
                </>
            )}
        </Grid>
    );
};

export default TeamsPage;
