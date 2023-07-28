import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <Box height="100vh" width="100%" position="relative">
            {children}
        </Box>
    );
};

export default Container;
