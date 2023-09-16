import { HStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
    icon: React.ReactNode;
    text?: string;
    fontSize?: number;
    onOpen?: () => void;
}

const FilterItem = ({ icon, text, fontSize = 14, onOpen }: Props) => {
    return (
        <HStack
            spacing={2}
            alignItems="center"
            cursor="pointer"
            onClick={onOpen}
        >
            {icon}
            <Text fontSize={fontSize} fontFamily="monospace">
                {text}
            </Text>
        </HStack>
    );
};

export default FilterItem;
