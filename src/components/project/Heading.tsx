import { Flex, Spinner, Text } from "@chakra-ui/react";

interface Props {
    text: string;
    total: number;
    loading?: boolean;
}

const Heading = ({ text, total, loading }: Props) => {
    return (
        <Flex justifyContent="space-between" marginBottom={5}>
            <Text>{text}</Text>
            {loading ? (
                <Spinner color="maroon" />
            ) : (
                <Text color="gray.500">({total})</Text>
            )}
        </Flex>
    );
};

export default Heading;
