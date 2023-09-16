import { Grid, GridItem } from "@chakra-ui/react";
import {
    CompletedProject,
    Container,
    FilterMenu,
    ProgressProject,
    TodoProject,
} from "../components";

const ProjectPage = () => {
    return (
        <Container>
            <FilterMenu />
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                gap={8}
                paddingY={5}
            >
                <GridItem>
                    <TodoProject />
                </GridItem>
                <GridItem>
                    <ProgressProject />
                </GridItem>
                <GridItem>
                    <CompletedProject />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default ProjectPage;
