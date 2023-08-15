import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";
import React from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    body: string;
}

const AlertDialogModal = ({ isOpen, onClose, title, body }: Props) => {
    const cancelRef = React.useRef(null);
    return (
        <>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader fontFamily="monospace" fontSize="2xl">
                        {title}
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody fontFamily="monospace" fontSize="large">
                        {body}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            px={8}
                            rounded="full"
                            size="sm"
                            ref={cancelRef}
                            onClick={onClose}
                        >
                            No
                        </Button>
                        <Button
                            px={8}
                            rounded="full"
                            size="sm"
                            colorScheme="red"
                            ml={3}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default AlertDialogModal;
