import { Box, HStack, Text } from "@chakra-ui/react";

interface Props {
    title: string;
    subtitle?: string;
    center?: boolean;
    icon?: React.ReactNode;
    textSize?: string;
}

const Heading = ({ title, subtitle, center, icon, textSize = "xl" }: Props) => {
    return (
        <Box textAlign={center ? "center" : "start"}>
            <HStack spacing={2}>
                <Text fontSize={textSize} fontWeight="normal" color="gray.200">
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
