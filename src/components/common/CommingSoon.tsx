import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import image from "../../assets/comming_soon.svg";
import { Link } from "react-router-dom";

const CommingSoon = () => {
    return (
        <Flex
            h="80vh"
            w="full"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            position="relative"
        >
            <Box w="90%" h="50%">
                <Image src={image} w="full" h="full" />
            </Box>
            <Text
                fontSize="4xl"
                fontWeight="semibold"
                textAlign="center"
                fontFamily="monospace"
                mb={8}
            >
                Comming soon
            </Text>
            <Link to="/">
                <Button bg="maroon" px={5} rounded="full" fontWeight="normal">
                    Home Page
                </Button>
            </Link>
        </Flex>
    );
};

export default CommingSoon;
