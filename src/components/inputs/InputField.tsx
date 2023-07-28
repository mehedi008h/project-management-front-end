import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
    id: string;
    label?: string;
    placeHolder: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    icon: React.ReactNode;
    password?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const InputField = ({
    id,
    label,
    placeHolder,
    type,
    disabled,
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
            <Text mb="8px">{label}</Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children={icon}
                />
                <Input
                    id={id}
                    placeholder={placeHolder}
                    type={show && type === "password" ? "text" : type}
                    disabled={disabled}
                    {...register(id, { required })}
                    borderColor={`${errors[id] ? "red" : "teal.200"}`}
                    border="1px"
                    backgroundColor="transparent"
                    variant="filled"
                    _focus={{ borderColor: `${errors[id] ? "red" : "teal"}` }}
                    _hover={{ borderColor: "teal" }}
                />
                {password && (
                    <InputRightElement>
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
