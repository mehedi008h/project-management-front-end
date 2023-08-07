import { Flex, useDisclosure } from "@chakra-ui/react";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { AddProject, Modal } from "..";

const AddProjectButton = () => {
    // open & close modal
    const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                disabled={false}
                title="Create Project"
                actionLabel="Next"
                secondaryAction={() => ""}
                secondaryActionLabel="Previous"
                onSubmit={() => ""}
                body={<AddProject />}
            />
        </Flex>
    );
};

export default AddProjectButton;
