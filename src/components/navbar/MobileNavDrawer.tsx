import React from "react";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { CgMenuRight } from "react-icons/cg";
import { Sidebar } from "..";

const MobileNavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);
    return (
        <>
            <Box
                display={{
                    base: "flex",
                    xl: "none",
                    md: "none",
                    lg: "none",
                }}
                justifyContent="center"
                alignItems="center"
                h={10}
                w={10}
                rounded="md"
                border="1px"
                borderColor="gray.500"
                ref={btnRef}
                onClick={onOpen}
            >
                <CgMenuRight size={25} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Sidebar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MobileNavDrawer;
