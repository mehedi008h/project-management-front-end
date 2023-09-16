import { Box, HStack, Text } from "@chakra-ui/react";

interface Props {
    title: string;
    subtitle?: string;
    center?: boolean;
    icon?: React.ReactNode;
}

const Heading = ({ title, subtitle, center, icon }: Props) => {
    return (
        <Box textAlign={center ? "center" : "start"}>
            <HStack spacing={2}>
                <Text
                    fontSize="xl"
                    fontWeight="normal"
                    color="gray.200"
                    fontFamily="monospace"
                >
                    {title}
                </Text>
                {icon}
            </HStack>
            <Text fontWeight="light" color="gray.500" marginTop={1}>
                {subtitle}
            </Text>
        </Box>
    );
};

export default Heading;
