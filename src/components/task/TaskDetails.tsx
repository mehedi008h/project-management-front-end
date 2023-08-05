import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FcHighPriority } from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import { MdNavigateNext, MdOutlineTimer } from "react-icons/md";
import { SiStatuspage } from "react-icons/si";

const TaskDetails = () => {
    return (
        <Box fontWeight="medium">
            <Flex justifyContent="space-between" alignItems="center">
                <Text>Task ID : wefj332</Text>
                {/*<Select*/}
                {/*    bg='gray'*/}
                {/*    width="-moz-fit-content"*/}
                {/*    size="sm"*/}
                {/*    borderColor="gray"*/}
                {/*    color='white'*/}
                {/*    placeholder='Status'*/}
                {/*    value={task?.status}*/}
                {/*>*/}
                {/*    <option value='TO_DO'>TO_DO</option>*/}
                {/*    <option value='PROCESSING'>PROCESSING</option>*/}
                {/*    <option value='COMPLETED'>COMPLETED</option>*/}
                {/*</Select>*/}
            </Flex>

            <Stack spacing={2}>
                <Text
                    mt={3}
                    fontSize={18}
                    fontWeight="semibold"
                    color="teal.500"
                >
                    Project Name
                </Text>
                <Text fontSize={14} color="gray.300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nam, hic.
                </Text>
                {/*remaining days */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15} />
                        <Text>Remaining days :</Text>
                    </Flex>
                    <Text>12 days</Text>
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
                    <Text>12-12-12</Text>
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
                    <Text>12-12-12</Text>
                </Flex>
                {/*priority */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <FcHighPriority size={15} />
                        <Text>Task Priority :</Text>
                    </Flex>
                    <Text>HIGH</Text>
                </Flex>
                {/*status */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <SiStatuspage color="white" size={15} />
                        <Text>Task Status :</Text>
                    </Flex>
                    <Text>Progress</Text>
                </Flex>
            </Stack>
            <Divider my={2} />
            <Text>Assigned By</Text>

            <Flex alignItems="center" gap={3} my={2}>
                <Avatar name="Mehedi Hasan" size="sm" />
                <Box>
                    <Text fontSize={16}>Mehedi Hasan</Text>
                    <Text fontSize={12} color="gray.300">
                        Software Engineer
                    </Text>
                </Box>
            </Flex>
            <Divider my={2} />
            <Button
                size="sm"
                w="100%"
                fontFamily="monospace"
                fontSize={16}
                rightIcon={
                    <MdNavigateNext className="next_btn" color="green" />
                }
            >
                Progress
            </Button>
        </Box>
    );
};

export default TaskDetails;
