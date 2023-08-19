import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    text: string;
    icon: ReactNode;
}

const InfoItem = ({ text, icon }: Props) => {
    return (
        <Flex
            alignItems="center"
            gap={3}
            flex={1}
            fontWeight="medium"
            color="gray.200"
            width="100%"
            fontSize={14}
        >
            {icon}
            <Text>{text}</Text>
        </Flex>
    );
};

export default InfoItem;
