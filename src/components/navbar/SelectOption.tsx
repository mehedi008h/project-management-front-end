import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Project } from "../../domain/project";
import placeHolder from "../../assets/no-image-placeholder.webp";
import { Status } from "../../enums/status.enum";
import useTaskStore from "../../store/useTaskStore";

interface Props {
    select?: boolean;
    project?: Project;
    setShowDeveloper: (show: boolean) => void;
}

const SelectOption = ({ select = false, project, setShowDeveloper }: Props) => {
    const setProjectIdentifier = useTaskStore((s) => s.setProjectIdentifier);
    const color =
        project?.status === Status.COMPLETED
            ? "green"
            : project?.status === Status.PROGRESS
            ? "yellow"
            : "red";
    return (
        <Box
            minH="48px"
            w="100%"
            py={1}
            px={3}
            cursor="pointer"
            _hover={{
                backgroundColor: "gray.900",
            }}
            onClick={() => {
                setProjectIdentifier(
                    select ? "" : (project?.projectIdentifier as string)
                );
                setShowDeveloper(select ? false : true);
            }}
        >
            <HStack>
                <Image
                    boxSize="2.5rem"
                    borderRadius="md"
                    src={project?.photo ? project.photo.url : placeHolder}
                    alt={project?.title}
                    mr="12px"
                />
                <Box>
                    <Text fontWeight="medium">
                        {project ? project?.title : "All Project"}
                    </Text>

                    <HStack spacing={2}>
                        <IoCheckmarkDoneCircleSharp color={color} />
                        <Text fontSize="sm" color="gray.300">
                            {project?.status}
                        </Text>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    );
};

export default SelectOption;
