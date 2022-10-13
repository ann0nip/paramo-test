import { Container, CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header.component';

const Layout = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Container
                maxWidth="xl"
                sx={{ backgroundColor: 'background.default', height: '100vh' }}
            >
                <Header />
                <Outlet />
            </Container>
        </Fragment>
    );
};

export default Layout;
