import { Box, HStack, Image, MenuItem, Text } from "@chakra-ui/react";

interface Props {
    arrow: boolean;
}

const SelectOption = ({ arrow = true }: Props) => {
    return (
        <MenuItem minH="48px" w="100%">
            <HStack>
                <Image
                    boxSize="2.5rem"
                    borderRadius="md"
                    src="https://placekitten.com/100/100"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                />
                <Box>
                    {arrow ? (
                        <Text fontWeight="medium" w="75%" overflow="hidden">
                            Fluffybuns the Destroyer dfgdfgdfshsdhshdfdsfds
                        </Text>
                    ) : (
                        <Text fontWeight="medium">
                            Fluffybuns the Destroyer dfgdfgdfshsdhshdfdsfds
                        </Text>
                    )}

                    <Text fontSize="sm" color="gray.300">
                        On Track
                    </Text>
                </Box>
            </HStack>
        </MenuItem>
    );
};

export default SelectOption;
