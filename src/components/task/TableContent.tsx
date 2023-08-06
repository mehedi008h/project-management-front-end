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
import { Modal, TaskDetails } from "..";

const TableContent = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            borderBottom="1px"
            borderColor="gray.800"
            backgroundColor="blackAlpha.500"
        >
            <GridItem
                colSpan={3}
                w="100%"
                h="10"
                borderRight="4px"
                borderColor="yellow.300"
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
                        <Text>e5456</Text>
                        <IoCheckmarkDoneCircleSharp size={16} color="green" />
                        <Text>Project manager</Text>
                    </Flex>
                    <Flex pr={4} gap="3">
                        <Flex gap={1} alignItems="center">
                            <IoChatboxEllipsesOutline size={16} color="green" />{" "}
                            <Text>20</Text>
                        </Flex>
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
                                actionLabel="Continue"
                                onSubmit={() => ""}
                                body={<TaskDetails />}
                            />
                            <IoIosArrowForward size={16} color="yellow" />{" "}
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                px={3}
            >
                <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Badge px={4} py={1} colorScheme="yellow">
                        Progress
                    </Badge>
                </Flex>
            </GridItem>
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
                        12 days
                    </Flex>
                </Badge>
            </GridItem>
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
                        <Text textTransform="uppercase">12-12-1222</Text>
                    </Flex>
                </Badge>
            </GridItem>
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15} />
                        <Text textTransform="uppercase">12222</Text>
                    </Flex>
                </Badge>
            </GridItem>
        </Grid>
    );
};

export default TableContent;
