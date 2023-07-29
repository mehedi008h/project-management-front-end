import { Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Text>Navbar</Text>
            <Outlet />
        </>
    );
};

export default Layout;
