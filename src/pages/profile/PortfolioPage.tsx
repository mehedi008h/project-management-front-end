import { VStack } from "@chakra-ui/react";
import { ProjectCard } from "../../components";

const PortfolioPage = () => {
    return (
        <VStack spacing={3}>
            <ProjectCard portfolio={true} />
            <ProjectCard portfolio={true} />
            <ProjectCard portfolio={true} />
        </VStack>
    );
};

export default PortfolioPage;
