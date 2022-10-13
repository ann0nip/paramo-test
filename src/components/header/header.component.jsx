import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const tool_bar_styles = {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
};

const title_styles = {
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'secondary.main',
    textDecoration: 'none',
};

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar sx={tool_bar_styles}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={title_styles}
                        gutterBottom
                    >
                        POKEDEX
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
