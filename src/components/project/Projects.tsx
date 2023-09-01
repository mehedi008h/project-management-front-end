import { Grid, GridItem } from "@chakra-ui/react";
import { Heading, ProjectConatiner } from "..";
import useProjects from "../../hooks/useProjects";
import { toast } from "react-hot-toast";
import { Status } from "../../enums/status.enum";

const Projects = () => {
    const { data: projects, isLoading, error } = useProjects();

    // show error message
    if (error) toast.error(error.message);

    // todo projects
    const todos = projects?.filter((project) => project.status === Status.TODO);
    // progress projects
    const progress = projects?.filter(
        (project) => project.status === Status.PROGRESS
    );
    // completed projects
    const completed = projects?.filter(
        (project) => project.status === Status.COMPLETED
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
                <Heading
                    text="Todo"
                    total={todos ? todos?.length : 0}
                    loading={isLoading}
                />

                <ProjectConatiner
                    loading={isLoading}
                    projects={todos}
                    text="No Project"
                />
            </GridItem>
            {/* progress project  */}
            <GridItem>
                <Heading
                    text="In Progress"
                    total={progress ? progress.length : 0}
                    loading={isLoading}
                />
                <ProjectConatiner
                    loading={isLoading}
                    projects={progress}
                    text="No Project In Progress"
                />
            </GridItem>
            {/* completed project  */}
            <GridItem>
                <Heading
                    text="Completed"
                    total={completed ? completed.length : 0}
                    loading={isLoading}
                />
                <ProjectConatiner
                    loading={isLoading}
                    projects={completed}
                    text="No Completed Project yet"
                />
            </GridItem>
        </Grid>
    );
};

export default Projects;
