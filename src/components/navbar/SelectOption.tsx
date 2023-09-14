import { Box, HStack, Image, MenuItem, Text } from "@chakra-ui/react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Project } from "../../domain/project";
import placeHolder from "../../assets/no-image-placeholder.webp";
import { Status } from "../../enums/status.enum";

interface Props {
    arrow: boolean;
    project?: Project;
}

const SelectOption = ({ arrow = true, project }: Props) => {
    const color =
        project?.status === Status.COMPLETED
            ? "green"
            : project?.status === Status.PROGRESS
            ? "yellow"
            : "red";
    return (
        <MenuItem minH="48px" w="100%">
            <HStack>
                <Image
                    boxSize="2.5rem"
                    borderRadius="md"
                    src={project?.photo ? project.photo.url : placeHolder}
                    alt={project?.title}
                    mr="12px"
                />
                <Box>
                    {arrow ? (
                        <Text fontWeight="medium" w="90%">
                            {project?.title}
                        </Text>
                    ) : (
                        <Text fontWeight="medium">{project?.title}</Text>
                    )}

                    <HStack spacing={2}>
                        <IoCheckmarkDoneCircleSharp color={color} />
                        <Text fontSize="sm" color="gray.300">
                            {project?.status}
                        </Text>
                    </HStack>
                </Box>
            </HStack>
        </MenuItem>
    );
};

export default SelectOption;
