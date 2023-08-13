import {
    Button,
    Divider,
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
    size?: string;
    onSubmit?: () => void;
    title?: string;
    body?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const ModalView = ({
    isOpen,
    onClose,
    size = "md",
    onSubmit,
    title,
    body,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}: Props) => {
    const handleSubmit = useCallback(() => {
        if (disabled || !onSubmit) {
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
        <Modal isOpen={isOpen} onClose={onClose} size={size}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontFamily="monospace" fontSize={20}>
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <Divider />
                <ModalBody>{body}</ModalBody>
                {onSubmit && actionLabel && (
                    <ModalFooter>
                        {secondaryAction && secondaryActionLabel && (
                            <Button
                                size="sm"
                                w="100%"
                                variant="outline"
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
                            marginLeft={2}
                        >
                            {actionLabel}
                        </Button>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalView;
