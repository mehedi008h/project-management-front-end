import { Flex } from "@chakra-ui/react";
import useProjectStore from "../../store/useProjectStore";
import { HiOutlineFolderAdd } from "react-icons/hi";

const AddProjectButton = () => {
    const { onOpen } = useProjectStore();
    return (
        <Flex
            onClick={onOpen}
            justifyContent="center"
            alignItems="center"
            h={8}
            w={12}
            rounded="md"
            backgroundColor="maroon"
            cursor="pointer"
        >
            <HiOutlineFolderAdd size={20} />
        </Flex>
    );
};

export default AddProjectButton;
