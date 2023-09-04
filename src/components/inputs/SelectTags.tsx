import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const SelectTags = () => {
    const [tags, setTags] = useState<string[]>([]);

    return (
        <Box textAlign="start" width={"100%"}>
            <Text mb="8px">Working Tech</Text>
            <HStack w="100%" flexWrap="wrap" spacing={3}>
                {["React.js", "Spring-boot", "Chakra-UI", "React Query"].map(
                    (tag, i) => (
                        <Badge
                            onClick={() => setTags([...tags, tag])}
                            colorScheme={
                                tags.find((selectedTag) => selectedTag === tag)
                                    ? "teal"
                                    : "gray"
                            }
                            variant="solid"
                            color="gray.200"
                            px={2}
                            py={1}
                            rounded="full"
                            cursor="pointer"
                            key={i}
                        >
                            {tag}
                        </Badge>
                    )
                )}
            </HStack>
        </Box>
    );
};

export default SelectTags;
