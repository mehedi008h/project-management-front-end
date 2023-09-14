import {
    Box,
    Button,
    Divider,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineLogin, AiOutlineMail } from "react-icons/ai";
import useForgotPassword from "../../hooks/useForgotPassword";
import { User } from "../../domain/user";

interface Props {
    setForgot: (forgot: boolean) => void;
}

const Forgot = ({ setForgot }: Props) => {
    const [email, setEmail] = useState<string>();
    const { mutate, isLoading } = useForgotPassword();
    return (
        <Box width="100%">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    mutate({ email } as User);
                }}
            >
                <InputGroup width="100%">
                    <InputLeftElement children={<AiOutlineMail />} />
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        borderRadius={20}
                        placeholder="example@genius.com"
                        variant="filled"
                        width="100%"
                        color="gray.300"
                        fontSize={15}
                        border="1px"
                        fontWeight={500}
                        background="transparent"
                        _focus={{ borderColor: "teal" }}
                        _hover={{ borderColor: "teal" }}
                    />
                </InputGroup>
                <Box w="100%" mt={2}>
                    <Button
                        width="100%"
                        mx="auto"
                        marginTop="10px"
                        bgGradient="linear(to-l, teal.600, teal.400)"
                        _hover={{
                            bgGradient: "linear(to-l, teal.500, teal.600)",
                        }}
                        borderRadius="full"
                        transition="all 0.5ms ease-in-out"
                        isDisabled={isLoading}
                        isLoading={isLoading}
                        type="submit"
                    >
                        Send
                    </Button>
                </Box>
            </form>
            <HStack gap="15px" padding="8">
                <Divider />
                <Text>OR</Text>
                <Divider />
            </HStack>
            <Button
                width="100%"
                variant="outline"
                leftIcon={<AiOutlineLogin size={20} />}
                fontSize={16}
                fontWeight={500}
                fontFamily="monospace"
                onClick={() => setForgot(false)}
            >
                Login
            </Button>
        </Box>
    );
};

export default Forgot;
