import {
    Box,
    Divider,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Awards, FormHeading, InfoItem, Skills } from "../../components";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";
import avatar from "../../assets/profile.png";
import { RiVipDiamondFill } from "react-icons/ri";

const ProfilePage = () => {
    const { data: user } = useAuth();
    return (
        <Box p={5} bg="black" rounded="md">
            <FormHeading
                title="Account"
                textSize="2xl"
                subtitle="Manage your account"
            />
            <Flex
                flexDirection={{
                    xl: "row",
                    lg: "row",
                    md: "row",
                    base: "column",
                }}
                gap={6}
                width="100%"
                mt={5}
            >
                {/* image  */}
                <Box
                    width={{
                        xl: "350px",
                        lg: "350px",
                        md: "350px",
                        base: "100%",
                    }}
                    height="200px"
                >
                    <Image
                        src={user?.photo ? user.photo.url : avatar}
                        w="100%"
                        h="100%"
                        rounded="md"
                        objectFit="cover"
                    />
                </Box>
                {/* description  */}
                <Box width="100%">
                    <Flex justifyContent="space-between">
                        <HStack spacing={1}>
                            <Text fontSize={20}>
                                {user?.firstName} {user?.lastName}
                            </Text>
                            <Text fontSize={14} color="gray.500">
                                (@{user?.username})
                            </Text>
                        </HStack>
                        <Flex
                            gap={2}
                            alignItems="center"
                            bg="transparent"
                            border="2px solid gray"
                            px={4}
                            py={1}
                            rounded="full"
                            color="silver"
                        >
                            <RiVipDiamondFill /> {user?.diamond}
                        </Flex>
                    </Flex>
                    <Text mt={3} color="gray.400" fontSize="sm">
                        {user?.description}
                    </Text>
                    <VStack mt={3} spacing={2}>
                        {user?.work && (
                            <InfoItem
                                text={user?.work}
                                icon={<HiOutlineOfficeBuilding size="22" />}
                            />
                        )}
                        {user?.email && (
                            <InfoItem
                                text={user?.email}
                                icon={<BiMessageRoundedDetail size="22" />}
                            />
                        )}
                        {user?.phone && (
                            <InfoItem
                                text={user?.phone}
                                icon={<AiOutlinePhone size="22" />}
                            />
                        )}
                        {user?.address && (
                            <InfoItem
                                text={user?.address}
                                icon={<CiLocationOn size="22" />}
                            />
                        )}
                    </VStack>
                </Box>
            </Flex>
            <Divider my={5} />

            <Awards />
            <Divider my={5} />
            <Skills skills={user?.skills} />
        </Box>
    );
};

export default ProfilePage;
