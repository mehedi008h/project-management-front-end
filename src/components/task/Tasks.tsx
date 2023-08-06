import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import { MobileTableContent, TableContent } from "..";

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
                <Box
                    display={{
                        base: "none",
                        xl: "block",
                        lg: "block",
                        md: "block",
                    }}
                >
                    <TableContent />
                    <TableContent />
                    <TableContent />
                </Box>
                <Box
                    display={{
                        base: "block",
                        xl: "none",
                        lg: "none",
                        md: "none",
                    }}
                    paddingBottom={3}
                >
                    <MobileTableContent />
                    <MobileTableContent />
                </Box>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default Tasks;
