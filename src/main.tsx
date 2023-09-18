import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import theme from "./theme.ts";
import router from "./routes.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Toaster />
            <GoogleOAuthProvider clientId="114489666800-jqgg0tnh2jbe7inu8e30c79iukgivies.apps.googleusercontent.com">
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </GoogleOAuthProvider>
        </ChakraProvider>
    </React.StrictMode>
);
