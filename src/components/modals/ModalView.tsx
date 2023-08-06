import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { useCallback } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const ModalView = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    actionLabel,

    disabled,
    secondaryAction,
    secondaryActionLabel,
}: Props) => {
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [onSubmit, disabled]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [secondaryAction, disabled]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{body}</ModalBody>
                <ModalFooter>
                    {secondaryAction && secondaryActionLabel && (
                        <Button
                            size="sm"
                            w="100%"
                            fontFamily="monospace"
                            fontSize={16}
                            disabled={disabled}
                            onClick={handleSecondaryAction}
                        >
                            {secondaryActionLabel}
                        </Button>
                    )}
                    <Button
                        size="sm"
                        w="100%"
                        fontFamily="monospace"
                        fontSize={16}
                        disabled={disabled}
                        onClick={handleSubmit}
                    >
                        {actionLabel}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalView;
