import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Heading, ProjectCard, ProjectSkeleton } from "..";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
    const { data: projects, isLoading } = useProjects();

    const loading = (
        <>
            <ProjectSkeleton />
            <ProjectSkeleton />
        </>
    );
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
            {/* todo project  */}
            <GridItem>
                <Heading text="Todo" total={10} loading={isLoading} />
                <VStack spacing={3}>
                    {isLoading ? (
                        loading
                    ) : (
                        <>
                            {projects
                                ?.filter((project) => project.status === "Todo")
                                .map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                        </>
                    )}
                </VStack>
            </GridItem>
            {/* progress project  */}
            <GridItem>
                <Heading text="In Progress" total={10} loading={isLoading} />
                <VStack spacing={3}>
                    {isLoading ? (
                        loading
                    ) : (
                        <>
                            {projects
                                ?.filter(
                                    (project) => project.status === "Progress"
                                )
                                .map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                        </>
                    )}
                </VStack>
            </GridItem>
            {/* completed project  */}
            <GridItem>
                <Heading text="Completed" total={10} loading={isLoading} />
                <VStack spacing={3}>
                    {isLoading ? (
                        loading
                    ) : (
                        <>
                            {projects
                                ?.filter(
                                    (project) => project.status === "Completed"
                                )
                                .map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                        </>
                    )}
                </VStack>
            </GridItem>
        </Grid>
    );
};

export default Projects;
