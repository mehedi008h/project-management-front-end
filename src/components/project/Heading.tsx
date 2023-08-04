import { Flex, Text } from "@chakra-ui/react";

interface Props {
    text: string;
    total: number;
}

const Heading = ({ text, total }: Props) => {
    return (
        <Flex justifyContent="space-between" marginBottom={5}>
            <Text>{text}</Text>
            <Text color="gray.500">({total})</Text>
        </Flex>
    );
};

export default Heading;
