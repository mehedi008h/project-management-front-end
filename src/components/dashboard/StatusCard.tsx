import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import CountUp from "react-countup";
import bg from "../../assets/853799_1454.jpg";

interface Props {
    text: string;
    count?: number;
    icon?: ReactNode;
}

const StatusCard = ({ text, count = 0, icon }: Props) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={3}
            rounded="md"
            border="1px"
            borderColor="gray.600"
            h="150px"
            bgImage={bg}
            backgroundSize="cover"
        >
            <Text fontSize="large" fontWeight="medium">
                {text}
            </Text>
            <HStack justifyContent="space-between" alignItems="end">
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        <CountUp end={count} />
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="gray.500">
                        Task Count
                    </Text>
                </Box>
                {icon}
            </HStack>
        </Flex>
    );
};

export default StatusCard;
