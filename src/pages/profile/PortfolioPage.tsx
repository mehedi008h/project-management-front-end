import { Box, VStack } from "@chakra-ui/react";
import { FormHeading } from "../../components";

const PortfolioPage = () => {
    return (
        <Box p={5} bg="black" rounded="md" h="70vh">
            <FormHeading
                title="All of your effort and success"
                textSize="2xl"
                subtitle="Your hardwork make you more stronger"
            />
            <VStack
                spacing={3}
                display={{ base: "none", lg: "flex", md: "flex", xl: "flex" }}
            >
                {/* <ProjectCard portfolio={true} />
                <ProjectCard portfolio={true} />
                <ProjectCard portfolio={true} /> */}
            </VStack>
            <VStack
                spacing={3}
                display={{ base: "flex", lg: "none", md: "none", xl: "none" }}
            >
                {/* <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
            </VStack>
        </Box>
    );
};

export default PortfolioPage;
