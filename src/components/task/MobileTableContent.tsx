import {
    Badge,
    Box,
    Flex,
    HStack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { Modal, TaskDetails } from "..";

const MobileTableContent = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Badge
                    onClick={onOpen}
                    cursor="pointer"
                    px={2}
                    py={1}
                    colorScheme="blue"
                >
                    <Flex alignItems="center" gap={2}>
                        <AiOutlineEye size={15} />
                        <Text textTransform="uppercase">View</Text>
                    </Flex>
                </Badge>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    disabled={false}
                    title="Task Details"
                    actionLabel="Continue"
                    onSubmit={() => ""}
                    body={<TaskDetails />}
                />
            </HStack>
        </Box>
    );
};

export default MobileTableContent;
