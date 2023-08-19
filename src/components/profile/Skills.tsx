import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const Skills = () => {
    return (
        <Box w="100%">
            <Text fontSize={20}>Skills</Text>
            <Flex gap={3} mt="3" flexWrap="wrap">
                {[
                    "TypeScript",
                    "JavaScript",
                    "Java",
                    "React.js",
                    "Node.js",
                    "Spring-boot",
                ].map((skill, i) => (
                    <Badge
                        key={i}
                        variant="solid"
                        colorScheme="teal"
                        px={3}
                        py={1}
                        rounded="full"
                    >
                        {skill}
                    </Badge>
                ))}
            </Flex>
        </Box>
    );
};

export default Skills;
