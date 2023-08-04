import { HStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
    icon: React.ReactNode;
    text?: string;
    fontSize?: number;
}

const FilterItem = ({ icon, text, fontSize = 14 }: Props) => {
    return (
        <HStack spacing={3} alignItems="center">
            {icon}
            <Text fontSize={fontSize} fontFamily="monospace">
                {text}
            </Text>
        </HStack>
    );
};

export default FilterItem;
