import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";

const MobileTableContent = () => {
    return (
        <Box
            backgroundColor="blackAlpha.500"
            p={2}
            rounded="md"
            borderRight="2px"
            borderColor="green"
            marginBottom={2}
        >
            <Text>MobileTableContent</Text>
            <HStack marginTop={2} spacing={2}>
                <Badge px={4} py={1} colorScheme="yellow">
                    Progress
                </Badge>
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">12-12-2023</Text>
                    </Flex>
                </Badge>
                <Badge cursor="pointer" px={2} py={1} colorScheme="blue">
                    <Flex alignItems="center" gap={2}>
                        <AiOutlineEye size={15} />
                        <Text textTransform="uppercase">View</Text>
                    </Flex>
                </Badge>
            </HStack>
        </Box>
    );
};

export default MobileTableContent;
