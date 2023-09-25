import { Container, Home, HomeLoading } from "../components";
import useAuth from "../hooks/useAuth";
import { Auth } from ".";
const Layout = () => {
    const { data: user, isLoading } = useAuth();

    return (
        <Container>
            {isLoading ? <HomeLoading /> : <>{user ? <Home /> : <Auth />}</>}
        </Container>
    );
};

export default Layout;
