import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FcHighPriority } from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { SiStatuspage } from "react-icons/si";
import moment from "moment";
import { Task } from "../../domain/task";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Status } from "../../enums/status.enum";
import useChangeTaskStatus from "../../hooks/useChangeTaskStatus";
import useUserDetails from "../../hooks/useUserDetails";

interface Props {
    task?: Task;
    developer?: boolean;
}

const TaskDetails = ({ task, developer }: Props) => {
    const { data: leader, isLoading: leaderLoading } = useUserDetails(
        task?.assigned as string
    );
    // calculate days
    const a = moment(task?.endDate);
    const b = moment(task?.startDate);
    const remaining = a.diff(b, "days");

    const { mutate, isLoading } = useChangeTaskStatus(task?.taskIdentifier);

    const handleStatus = (status: string) => {
        mutate({ status } as Task);
    };

    return (
        <Box fontWeight="medium">
            <Flex justifyContent="space-between" alignItems="center">
                <Text>Task ID : {task?.taskIdentifier}</Text>
                <Link to={`/projects/${task?.projectIdentifier}`}>
                    <Button
                        size="sm"
                        fontFamily="monospace"
                        fontSize={16}
                        rightIcon={
                            <IoIosArrowForward
                                size={16}
                                color="green"
                                className="next_btn"
                            />
                        }
                    >
                        Go to project
                    </Button>
                </Link>
            </Flex>

            <Stack spacing={2}>
                <Text
                    mt={3}
                    fontSize={18}
                    fontWeight="semibold"
                    color="teal.500"
                >
                    {task?.title}
                </Text>
                <Text fontSize={14} color="gray.300">
                    {task?.description}
                </Text>
                {/*remaining days */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15} />
                        <Text>Remaining days :</Text>
                    </Flex>
                    <Text>{remaining} days</Text>
                </Flex>
                {/*assign date */}
                <Flex
                    color="green.500"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text>Assign Date :</Text>
                    </Flex>
                    <Text>
                        {moment(task?.startDate).format("MMMM Do YYYY")}
                    </Text>
                </Flex>
                {/*due date */}
                <Flex
                    color="red.500"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text>Due Date :</Text>
                    </Flex>
                    <Text>{moment(task?.endDate).format("MMMM Do YYYY")}</Text>
                </Flex>
                {/*priority */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <FcHighPriority size={15} />
                        <Text>Task Priority :</Text>
                    </Flex>
                    <Text>{task?.priority.toUpperCase()}</Text>
                </Flex>
                {/*status */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <SiStatuspage color="white" size={15} />
                        <Text>Task Status :</Text>
                    </Flex>
                    <Text>{task?.status.toUpperCase()}</Text>
                </Flex>
            </Stack>
            <Divider my={2} />
            <Text>Assigned By</Text>

            {leaderLoading ? (
                <Box w="100%" textAlign="center">
                    <Spinner color="red" mt={10} />
                </Box>
            ) : (
                <Flex alignItems="center" gap={2} my={2}>
                    <Avatar name={leader?.firstName} size="sm" />
                    <Box>
                        <Flex alignItems="center" gap={1}>
                            <Text>
                                {`${leader?.firstName}  ${leader?.lastName}`}
                            </Text>
                            <Text fontSize={12} color="gray.500">
                                (@{leader?.username})
                            </Text>
                        </Flex>
                        <Text fontSize={13} color="gray.500">
                            {leader?.email}
                        </Text>
                    </Box>
                </Flex>
            )}

            <Divider my={2} />
            {/* TODO: Change task status by developer */}
            {developer && (
                <>
                    {task?.status === Status.TODO && (
                        <Button
                            size="md"
                            w="100%"
                            fontFamily="monospace"
                            fontSize={16}
                            isLoading={isLoading}
                            isDisabled={isLoading}
                            onClick={() => handleStatus(Status.PROGRESS)}
                        >
                            Progress
                        </Button>
                    )}
                    {task?.status === Status.PROGRESS && (
                        <HStack>
                            <Button
                                size="md"
                                w="100%"
                                fontFamily="monospace"
                                fontSize={16}
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                onClick={() => handleStatus(Status.TODO)}
                            >
                                Todo
                            </Button>
                            <Button
                                size="md"
                                w="100%"
                                fontFamily="monospace"
                                fontSize={16}
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                onClick={() => handleStatus(Status.COMPLETED)}
                            >
                                Complete
                            </Button>
                        </HStack>
                    )}
                    {task?.status === Status.COMPLETED && (
                        <Button
                            size="md"
                            w="100%"
                            fontFamily="monospace"
                            fontSize={16}
                            isLoading={isLoading}
                            isDisabled={isLoading}
                            onClick={() => handleStatus(Status.PROGRESS)}
                        >
                            Progress
                        </Button>
                    )}
                </>
            )}
        </Box>
    );
};

export default TaskDetails;
