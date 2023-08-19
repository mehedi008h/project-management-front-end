import { VStack } from "@chakra-ui/react";
import { ProjectCard } from "../../components";

const PortfolioPage = () => {
    return (
        <>
            <VStack
                spacing={3}
                display={{ base: "none", lg: "flex", md: "flex", xl: "flex" }}
            >
                <ProjectCard portfolio={true} />
                <ProjectCard portfolio={true} />
                <ProjectCard portfolio={true} />
            </VStack>
            <VStack
                spacing={3}
                display={{ base: "flex", lg: "none", md: "none", xl: "none" }}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </VStack>
        </>
    );
};

export default PortfolioPage;
