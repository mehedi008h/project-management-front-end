import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Heading, ProjectCard } from "..";

const Projects = () => {
    return (
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
                <Heading text="Working" total={10} />
                <VStack spacing={3}>
                    <ProjectCard />
                    <ProjectCard />
                </VStack>
            </GridItem>
            <GridItem>
                <Heading text="In Progress" total={10} />
                <VStack spacing={3}>
                    <ProjectCard />
                </VStack>
            </GridItem>
            <GridItem>
                <Heading text="Completed" total={10} />
                <VStack spacing={3}>
                    <ProjectCard />
                </VStack>
            </GridItem>
        </Grid>
    );
};

export default Projects;
