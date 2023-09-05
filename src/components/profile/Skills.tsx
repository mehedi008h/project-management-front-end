import { Badge, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
    skills: string[] | undefined;
}

const Skills = ({ skills }: Props) => {
    return (
        <Box w="100%">
            <Text fontSize={20}>Skills</Text>
            <Flex gap={3} mt="3" flexWrap="wrap">
                {skills?.map((skill, i) => (
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
