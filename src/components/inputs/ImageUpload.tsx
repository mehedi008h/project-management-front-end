import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface Props {
    avatar?: string;
    uploadAvatar: ChangeEventHandler<HTMLInputElement>;
}

const ImageUpload = ({ avatar, uploadAvatar }: Props) => {
    return (
        <label htmlFor="avatar">
            <Flex
                position="relative"
                cursor="pointer"
                borderStyle="dashed"
                border="2px"
                p={20}
                borderColor="gray.400"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={4}
                color="gray.500"
            >
                <Input
                    type="file"
                    id="avatar"
                    accept="iamges/*"
                    display="none"
                    visibility="hidden"
                    onChange={uploadAvatar}
                />
                <TbPhotoPlus size={50} />
                <Text fontWeight="semibold" fontSize="large">
                    Click to upload
                </Text>
                {avatar && (
                    <Box position="absolute" inset={0} w="100%" h="100%">
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="contain"
                            src={avatar}
                            alt="House"
                        />
                    </Box>
                )}
            </Flex>
        </label>
    );
};

export default ImageUpload;
