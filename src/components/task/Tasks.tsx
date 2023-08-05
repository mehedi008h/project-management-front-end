import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import { TableContent } from "..";

interface Props {
    header: string;
}

const Tasks = ({ header }: Props) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton backgroundColor="blackAlpha.600">
                    <Box as="span" flex="1" textAlign="left">
                        {header}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} paddingX={0}>
                <TableContent />
                <TableContent />
                <TableContent />
            </AccordionPanel>
        </AccordionItem>
    );
};

export default Tasks;
