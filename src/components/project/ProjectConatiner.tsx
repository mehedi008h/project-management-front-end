import { VStack } from "@chakra-ui/react";
import { ProjectCard, ProjectSkeleton } from "..";
import { Project } from "../../domain/project";

interface Props {
    loading: boolean;
    projects: Project[] | undefined;
}

const ProjectConatiner = ({ loading, projects }: Props) => {
    // If loading
    if (loading) return [1, 2].map((item) => <ProjectSkeleton key={item} />);

    return (
        <VStack spacing={3}>
            {projects &&
                projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
        </VStack>
    );
};

export default ProjectConatiner;
