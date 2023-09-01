import { Flex, Text } from "@chakra-ui/react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

interface Props {
    text: string;
}

const Empty = ({ text }: Props) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            color="gray.500"
            h="40vh"
            justifyContent="center"
        >
            <BsFileEarmarkBarGraph size={40} />
            <Text fontFamily="monospace" mt={4} fontSize={16}>
                {text}
            </Text>
        </Flex>
    );
};

export default Empty;
