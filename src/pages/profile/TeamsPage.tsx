import { Grid, GridItem } from "@chakra-ui/react";
import { UserCard } from "../../components";

const TeamsPage = () => {
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
            <GridItem>
                <UserCard />
            </GridItem>
            <GridItem>
                <UserCard />
            </GridItem>
        </Grid>
    );
};

export default TeamsPage;
