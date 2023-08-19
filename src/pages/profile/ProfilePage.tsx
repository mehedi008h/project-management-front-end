import { Box, Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { BiMessageRoundedDetail } from "react-icons/bi";

import placeHolder from "../../assets/no-image-placeholder.webp";
import { Awards, InfoItem, Skills } from "../../components";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ProfilePage = () => {
    return (
        <Box bg="blackAlpha.500" p={3} borderRadius="md" w="100%">
            <Flex
                flexDirection={{
                    xl: "row",
                    lg: "row",
                    md: "row",
                    base: "column",
                }}
                gap={6}
                width="100%"
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
                        src={placeHolder}
                        w="100%"
                        h="100%"
                        rounded="md"
                        objectFit="cover"
                    />
                </Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>Mehedi Hasan</Text>
                    <Text mt={2} color="gray.400" fontSize="sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque eius adipisci, quasi voluptate neque iure!
                    </Text>
                    <VStack mt={3} spacing={2}>
                        <InfoItem
                            text="Microsoft Corporation"
                            icon={<HiOutlineOfficeBuilding size="22" />}
                        />
                        <InfoItem
                            text="mehedi08h@gmail.com"
                            icon={<BiMessageRoundedDetail size="22" />}
                        />
                        <InfoItem
                            text="01990473473"
                            icon={<AiOutlinePhone size="22" />}
                        />
                        <InfoItem
                            text="Dhanmondi, Dhaka"
                            icon={<CiLocationOn size="22" />}
                        />
                    </VStack>
                </Box>
            </Flex>
            <Divider my={5} />
            <Awards />
            <Divider my={5} />
            <Skills />
        </Box>
    );
};

export default ProfilePage;
