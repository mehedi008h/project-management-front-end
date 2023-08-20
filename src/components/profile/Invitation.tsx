import { Flex, useDisclosure } from "@chakra-ui/react";
import { FcInvite } from "react-icons/fc";
import { AssignedUserCard, Modal } from "..";

const Invitation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                onClick={onOpen}
                alignItems="center"
                gap={3}
                flex={1}
                fontWeight="medium"
                cursor="pointer"
                padding={3}
                color="gray.400"
                rounded="md"
                width="100%"
                _hover={{
                    color: "white",
                    backgroundColor: "#121212",
                }}
                transition="all"
            >
                <FcInvite size={22} />
                Invitation
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                disabled={false}
                title="Invitation"
                body={<AssignedUserCard btnText="Confirm" />}
            />
        </>
    );
};

export default Invitation;
