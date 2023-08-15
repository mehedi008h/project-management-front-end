import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";

interface Props {
    btnText: string;
}

const AssignedUserCard = ({ btnText }: Props) => {
    return (
        <Stack spacing={2} my={2}>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                px={2}
                py={2}
                rounded="md"
                _hover={{ bg: "blackAlpha.400" }}
            >
                <Flex alignItems="center" gap={2}>
                    <Avatar name="Mehedi Hasan" />
                    <Box>
                        <Text>Mehedi Hasan</Text>
                        <Text fontSize={12} color="gray.500">
                            mehedi08h@gmail.com
                        </Text>
                    </Box>
                </Flex>
                <Button size="sm" variant="outline" onClick={() => ""}>
                    {btnText}
                </Button>
            </Flex>
        </Stack>
    );
};

export default AssignedUserCard;
