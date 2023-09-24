import {
    Box,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Tag,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
    id: string;
    label?: string;
    value?: string;
    placeHolder: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    rounded?: string;
    icon: React.ReactNode;
    password?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const InputField = ({
    id,
    label,
    value,
    placeHolder,
    type,
    disabled,
    rounded = "md",
    required,
    icon,
    password,
    register,
    errors,
}: Props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <Box textAlign="start" width={"100%"}>
            <HStack alignItems="center" mb="8px">
                <Text color="gray.400">{label}</Text>
                {value && (
                    <Tag fontFamily="monospace" colorScheme="messenger">
                        {value}
                    </Tag>
                )}
            </HStack>
            <InputGroup rounded={rounded}>
                <InputLeftElement
                    pointerEvents="none"
                    color="gray.400"
                    fontSize="1.2em"
                    children={icon}
                />
                <Input
                    rounded={rounded}
                    id={id}
                    placeholder={placeHolder}
                    type={show && type === "password" ? "text" : type}
                    disabled={disabled}
                    {...register(id, { required })}
                    borderColor={`${errors[id] ? "red" : "teal.200"}`}
                    border="1px"
                    backgroundColor="transparent"
                    variant="filled"
                    color="gray.300"
                    fontSize={15}
                    _focus={{ borderColor: `${errors[id] ? "red" : "teal"}` }}
                    _hover={{ borderColor: "teal" }}
                />
                {password && (
                    <InputRightElement color="gray.500">
                        {show ? (
                            <AiOutlineEyeInvisible
                                onClick={handleClick}
                                size={20}
                            />
                        ) : (
                            <AiOutlineEye onClick={handleClick} size={20} />
                        )}
                    </InputRightElement>
                )}
            </InputGroup>
        </Box>
    );
};

export default InputField;
