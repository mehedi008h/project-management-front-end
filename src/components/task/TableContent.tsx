import {
    Badge,
    Flex,
    Grid,
    GridItem,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import {
    IoChatboxEllipsesOutline,
    IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
import { Modal, TaskAction, TaskDetails } from "..";
import { Task } from "../../domain/task";
import { Status } from "../../enums/status.enum";
import moment from "moment";
import { Priority } from "../../enums/priority.enum";
import useAuth from "../../hooks/useAuth";

interface Props {
    task?: Task;
    projectLeader?: boolean;
}

const TableContent = ({ task, projectLeader }: Props) => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: user } = useAuth();

    // check task developer
    const taskDeveloper: boolean =
        user && task?.developer == user._id ? true : false;

    const access = projectLeader || taskDeveloper;

    // calculate days
    const a = moment(task?.endDate);
    const b = moment();

    const over = a.diff(b);
    const remaining = moment(task?.endDate).endOf("day").fromNow();

    return (
        <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            rounded="md"
            borderBottom="1px"
            borderColor="gray.800"
            backgroundColor={
                task?.status !== Status.COMPLETED
                    ? over > 0
                        ? "blackAlpha.500"
                        : "#4F0E18"
                    : "blackAlpha.500"
            }
        >
            <GridItem
                colSpan={3}
                w="100%"
                h="10"
                borderRight="4px"
                borderColor={
                    task?.priority === Priority.LOW
                        ? "green"
                        : task?.priority === Priority.MEDIUM
                        ? "yellow"
                        : "red"
                }
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Flex
                    width="100%"
                    gap={2}
                    justify="space-between"
                    alignItems="center"
                >
                    <Flex gap={2} alignItems="center">
                        <IoCheckmarkDoneCircleSharp
                            id={task?.taskIdentifier}
                            size={16}
                            color={
                                task?.status === Status.COMPLETED
                                    ? "green"
                                    : task?.status === Status.PROGRESS
                                    ? "yellow"
                                    : "red"
                            }
                        />
                        <Tooltip
                            anchorId={task?.taskIdentifier}
                            place="top"
                            content={task?.status.toUpperCase()}
                        />

                        <Text>{task?.title.substring(0, 40)}</Text>
                    </Flex>
                    <Flex pr={4} gap="3">
                        <Flex gap={1} alignItems="center">
                            <IoChatboxEllipsesOutline size={16} color="green" />
                            <Text>20</Text>
                        </Flex>
                        {/* task details avaliable for project leader & task developer */}
                        {access && (
                            <Flex
                                gap={1}
                                alignItems="center"
                                cursor="pointer"
                                _hover={{ color: "yellow" }}
                            >
                                <Text onClick={onOpen} cursor="pointer">
                                    Details
                                </Text>
                                {/*task details modal */}

                                <Modal
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    disabled={false}
                                    title="Task Details"
                                    body={
                                        <TaskDetails
                                            task={task}
                                            developer={taskDeveloper}
                                        />
                                    }
                                />

                                <IoIosArrowForward
                                    size={16}
                                    color="green"
                                    className="next_btn"
                                />
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </GridItem>
            {!projectLeader && (
                <GridItem
                    w="100%"
                    borderRight="1px"
                    borderColor="gray.800"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    px={3}
                >
                    <Flex w="100%" alignItems="center" flexWrap="wrap" gap={1}>
                        {task?.tags.map((tag, i) => (
                            <Badge
                                key={i}
                                colorScheme="yellow"
                                fontFamily="monospace"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </Flex>
                </GridItem>
            )}

            {/* remaining days  */}
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={4} py={1}>
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15} />
                        {remaining}
                    </Flex>
                </Badge>
            </GridItem>
            {/* assign data  */}
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Badge px={2} py={1} colorScheme="green">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">
                            {moment(task?.startDate).format("MMM Do YY")}
                        </Text>
                    </Flex>
                </Badge>
            </GridItem>
            {/* end date  */}
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                borderRight="1px"
                borderColor="gray.800"
                pl={3}
            >
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">
                            {moment(task?.endDate).format("MMM Do YY")}
                        </Text>
                    </Flex>
                </Badge>
            </GridItem>
            {projectLeader && (
                <TaskAction taskIdentifier={task?.taskIdentifier} />
            )}
        </Grid>
    );
};

export default TableContent;
