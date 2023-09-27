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
    loading?: boolean;
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
    loading,
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
            <ModalOverlay backdropBlur="3xl" backdropBrightness={3} />
            <ModalContent>
                <ModalHeader
                    backgroundColor="#0D1117"
                    fontFamily="monospace"
                    fontSize="2xl"
                >
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <Divider />
                <ModalBody py={8} backgroundColor="#0D1117">
                    {body}
                </ModalBody>
                {onSubmit && actionLabel && (
                    <ModalFooter backgroundColor="#0D1117">
                        {secondaryAction && secondaryActionLabel && (
                            <Button
                                size="md"
                                w="100%"
                                variant="outline"
                                fontFamily="monospace"
                                fontSize={16}
                                disabled={disabled}
                                marginRight={2}
                                onClick={handleSecondaryAction}
                            >
                                {secondaryActionLabel}
                            </Button>
                        )}

                        <Button
                            size="md"
                            w="100%"
                            fontFamily="monospace"
                            fontSize={16}
                            isLoading={loading}
                            disabled={disabled}
                            onClick={handleSubmit}
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
