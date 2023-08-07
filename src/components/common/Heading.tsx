import { Box, Text } from "@chakra-ui/react";

interface Props {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading = ({ title, subtitle, center }: Props) => {
    return (
        <Box textAlign={center ? "center" : "start"}>
            <Text fontSize="2xl" fontWeight="bold">
                {title}
            </Text>
            <Text fontWeight="light" color="gray.500" marginTop={2}>
                {subtitle}
            </Text>
        </Box>
    );
};

export default Heading;
