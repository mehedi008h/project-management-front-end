import { VStack } from "@chakra-ui/react";
import { Empty, ProjectCard, ProjectSkeleton } from "..";
import { Project } from "../../domain/project";

interface Props {
    loading: boolean;
    projects: Project[] | undefined;
    text: string;
}

const ProjectConatiner = ({ loading, projects, text }: Props) => {
    // If loading
    if (loading) return [1, 2].map((item) => <ProjectSkeleton key={item} />);

    // Check project length
    if (projects && projects.length === 0) return <Empty text={text} />;

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
