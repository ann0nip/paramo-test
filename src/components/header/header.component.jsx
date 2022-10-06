import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
                <Toolbar sx={tool_bar_styles} disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={title_styles}
                    >
                        POKEDEX
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
