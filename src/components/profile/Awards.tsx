import { Box, Flex, Text } from "@chakra-ui/react";
import { Award } from "..";

const Awards = () => {
    return (
        <Box w="100%">
            <Text fontSize={20}>Awards</Text>
            <Flex justifyContent="space-between" gap={3} mt="3" flexWrap="wrap">
                <Award />
                <Award />
                <Award />
                <Award />
            </Flex>
        </Box>
    );
};

export default Awards;
