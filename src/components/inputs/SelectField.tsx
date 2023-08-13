import { Box, InputGroup, Select, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    id: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    children: ReactNode;
}

const SelectField = ({
    id,
    label,
    disabled,
    required,
    register,
    errors,
    children,
}: Props) => {
    return (
        <Box textAlign="start" width={"100%"}>
            <Text mb="8px">{label}</Text>
            <InputGroup>
                <Select
                    id={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    borderColor={`${errors[id] ? "red" : "teal.200"}`}
                    border="1px"
                    backgroundColor="transparent"
                    variant="filled"
                    _focus={{ borderColor: `${errors[id] ? "red" : "teal"}` }}
                    _hover={{ borderColor: "teal" }}
                >
                    {children}
                </Select>
            </InputGroup>
        </Box>
    );
};

export default SelectField;
