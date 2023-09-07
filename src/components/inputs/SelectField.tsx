import { Box, HStack, InputGroup, Select, Tag, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    id: string;
    label?: string;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    children: ReactNode;
}

const SelectField = ({
    id,
    label,
    value,
    disabled,
    required,
    register,
    errors,
    children,
}: Props) => {
    return (
        <Box textAlign="start" width={"100%"}>
            <HStack alignItems="center" mb="8px">
                <Text>{label}</Text>
                {value && (
                    <Tag fontFamily="monospace" colorScheme="messenger">
                        {value}
                    </Tag>
                )}
            </HStack>
            <InputGroup>
                <Select
                    id={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    borderColor={`${errors[id] ? "red" : "teal.200"}`}
                    border="1px"
                    color="gray.600"
                    fontSize={15}
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
