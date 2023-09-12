import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import { Empty, MobileTableContent, TableContent } from "..";
import { Task } from "../../domain/task";

interface Props {
    header: string;
    tasks?: Task[];
}

const Tasks = ({ header, tasks }: Props) => {
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
                    {tasks?.length === 0 && <Empty text="No task 😎" />}
                    {tasks?.map((task) => (
                        <TableContent key={task._id} task={task} />
                    ))}
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
