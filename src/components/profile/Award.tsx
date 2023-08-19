import { Text, VStack } from "@chakra-ui/react";
import { FaAward } from "react-icons/fa";

const Award = () => {
    return (
        <VStack
            spacing={3}
            p={3}
            w="150px"
            rounded="md"
            _hover={{
                bg: "black",
            }}
        >
            <FaAward size="32" />
            <Text fontSize={14} color="yellow">
                21+
            </Text>
            <Text>Award</Text>
        </VStack>
    );
};

export default Award;
