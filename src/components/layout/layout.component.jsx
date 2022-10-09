import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../header/header.component';

const Layout = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Container
                maxWidth="xl"
                sx={{ backgroundColor: 'background.default' }}
            >
                <Header />
                <Outlet />
            </Container>
        </Fragment>
    );
};

export default Layout;
