import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container } from "../components";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Container>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? "This page does not exist."
                        : "An unexpected error occurred."}
                </Text>
            </Box>
        </Container>
    );
};

export default ErrorPage;
