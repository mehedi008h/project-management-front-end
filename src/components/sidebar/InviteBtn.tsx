import { Flex, Text } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";
import useInviteStore from "../../store/useInviteStore";

interface Props {
    toogle?: boolean;
}
const InviteBtn = ({ toogle = false }: Props) => {
    // open & close modal
    const { onOpen } = useInviteStore();
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
            {toogle && (
                <Text fontFamily="monospace" fontSize="large">
                    Invite Teammember
                </Text>
            )}
        </Flex>
    );
};

export default InviteBtn;
