import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SelectOption } from "..";
import { Project } from "../../domain/project";

interface Props {
    projects?: Project[];
}

const ProjectSelector = ({ projects }: Props) => {
    return (
        <Menu>
            <MenuButton
                variant="unstyled"
                w="85%"
                as={Button}
                rightIcon={<AiOutlineArrowDown />}
                display="flex"
                alignItems="start"
            >
                <SelectOption arrow project={projects?.[0]} />
            </MenuButton>

            <MenuList w="100%" marginTop={5}>
                {projects?.map((project) => (
                    <SelectOption
                        key={project._id}
                        project={project}
                        arrow={false}
                    />
                ))}
            </MenuList>
        </Menu>
    );
};

export default ProjectSelector;
