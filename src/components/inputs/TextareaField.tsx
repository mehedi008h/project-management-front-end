import { Box, InputGroup, Text, Textarea } from "@chakra-ui/react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
    id: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const TextareaField = ({
    id,
    label,
    disabled,
    required,

    register,
    errors,
}: Props) => {
    return (
        <Box textAlign="start" width={"100%"}>
            <Text mb="8px">{label}</Text>
            <InputGroup>
                <Textarea
                    id={id}
                    disabled={disabled}
                    rows={10}
                    {...register(id, { required })}
                    borderColor={`${errors[id] ? "red" : "teal.200"}`}
                    border="1px"
                    backgroundColor="transparent"
                    variant="filled"
                    _focus={{ borderColor: `${errors[id] ? "red" : "teal"}` }}
                    _hover={{ borderColor: "teal" }}
                />
            </InputGroup>
        </Box>
    );
};

export default TextareaField;
