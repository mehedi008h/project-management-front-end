import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const HomeLoading = () => {
    return (
        <Flex
            h="100vh"
            w="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box height={16} width={16}>
                    <Image src={logo} />
                </Box>
                <Text fontSize="3xl" fontWeight="bold" marginTop={2}>
                    Genius
                </Text>
            </Flex>
            <Spinner color="red.500" size="xl" mt={5} />
        </Flex>
    );
};

export default HomeLoading;
