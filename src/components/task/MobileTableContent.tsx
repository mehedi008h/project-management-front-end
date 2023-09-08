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
import moment from "moment";
import { Modal, TaskDetails } from "..";
import { Task } from "../../domain/task";
import { Status } from "../../enums/status.enum";
import { Priority } from "../../enums/priority.enum";

interface Props {
    task?: Task;
}

const MobileTableContent = ({ task }: Props) => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            backgroundColor="blackAlpha.500"
            p={2}
            rounded="md"
            borderRight="2px"
            borderColor={
                task?.priority === Priority.LOW
                    ? "green"
                    : task?.priority === Priority.MEDIUM
                    ? "yellow"
                    : "red"
            }
            marginBottom={2}
        >
            <Text>{task?.title}</Text>
            <HStack marginTop={2} spacing={2}>
                <Badge
                    px={4}
                    py={1}
                    colorScheme={
                        task?.status === Status.COMPLETED
                            ? "green"
                            : task?.status === Status.PROGRESS
                            ? "yellow"
                            : "red"
                    }
                >
                    {task?.status}
                </Badge>
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">
                            {moment(task?.endDate).format("MMM Do YY")}
                        </Text>
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
                    body={<TaskDetails task={task} />}
                />
            </HStack>
        </Box>
    );
};

export default MobileTableContent;
