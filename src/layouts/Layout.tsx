import { Box } from "@mui/material";
import { Container, Stack } from "@mui/material";
import Header from "../components/Header/Header";

const Layout = ({ children }: PropsType): JSX.Element => {
    return (
        <Box sx={{backgroundImage: 'url(/img/bg.jpg)', minHeight: '100vh'}}>
            <Header />
            <Container maxWidth="lg" sx={{padding: '60px 0'}}>
                {children}
            </Container>
        </Box>
    )
}

interface PropsType {
    children: any
}

export default Layout;