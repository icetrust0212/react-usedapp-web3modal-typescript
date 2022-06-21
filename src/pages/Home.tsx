import { Grid, Paper, Stack, Typography } from "@mui/material";

const Home  = () => {
    return (
        <Paper elevation={3} sx={{backgroundColor: 'white', minHeight: '70vh'}}>
            <Stack>
                <Typography variant="h1" component="h2">
                  Customize Your NFTs
                </Typography>;
            </Stack>
        </Paper>
    )
}

export default Home;