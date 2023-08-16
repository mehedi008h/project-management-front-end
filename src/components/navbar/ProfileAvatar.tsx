import {
    Avatar,
    Box,
    HStack,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfileAvatar = () => {
    return (
        <>
            <Menu>
                <MenuButton>
                    <Avatar name="Mehedi Hasan" size="md" cursor="pointer" />
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        <HStack px={2} my={2}>
                            <Avatar
                                name="Mehedi Hasan"
                                size="md"
                                cursor="pointer"
                            />
                            <Box>
                                <Text>Mehedi Hasan</Text>
                                <Text fontSize={12} color="gray.500">
                                    Software Engineer
                                </Text>
                            </Box>
                        </HStack>
                        <Link to="/profile">
                            <MenuItem>My Account</MenuItem>
                        </Link>
                        <MenuItem>Logout</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </>
    );
};

export default ProfileAvatar;
