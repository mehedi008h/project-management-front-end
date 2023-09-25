import { TbMoodEdit } from "react-icons/tb";
import { Flex } from "@chakra-ui/react";
import useUserStore from "../../store/useUserStore";

const EditProfileBtn = () => {
    const { onOpen } = useUserStore();
    return (
        <Flex
            onClick={onOpen}
            alignItems="center"
            gap={3}
            flex={1}
            fontWeight="medium"
            cursor="pointer"
            padding={2}
            color="gray.400"
            rounded="md"
            width="100%"
            _hover={{
                color: "white",
                backgroundColor: "#121212",
            }}
            transition="all"
        >
            <TbMoodEdit size={22} />
            Update Profile
        </Flex>
    );
};

export default EditProfileBtn;
