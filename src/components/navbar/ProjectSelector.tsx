import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SelectOption } from "..";

const ProjectSelector = () => {
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
                <SelectOption arrow />
            </MenuButton>

            <MenuList w="100%" marginTop={5}>
                <SelectOption arrow={false} />
                <SelectOption arrow={false} />
            </MenuList>
        </Menu>
    );
};

export default ProjectSelector;
