import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";
import { InviteNewMember, Modal } from "..";

const InviteBtn = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            onClick={onOpen}
            p={3}
            rounded="md"
            alignItems="center"
            gap={3}
            cursor="pointer"
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{ bgGradient: "linear(to-r, teal.600, green.600)" }}
        >
            <BsSend className="next_btn" />
            <Text fontFamily="monospace" fontSize="large">
                Invite Teammember
            </Text>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    disabled={false}
                    title="Invite Teammember"
                    body={<InviteNewMember />}
                />
            )}
        </Flex>
    );
};

export default InviteBtn;
