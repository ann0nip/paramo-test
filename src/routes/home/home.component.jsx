import { Container, Grid, styled } from '@mui/material';
import SearchBar from '../../components/search-bar/search-bar.component';

const SpanInfoText = styled('span')(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    color: theme.palette.secondary.light,
}));

const SearchSection = () => (
    <Grid
        sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { md: 'row-reverse' },
            height: 'auto',
        }}
        container
    >
        <Grid
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            item
            md={6}
        >
            <SpanInfoText
                sx={{
                    fontSize: { xs: '0.8rem', md: '1.5rem' },
                    display: { xs: 'none', md: 'block' },
                }}
            >
                {'⬅'}
            </SpanInfoText>

            <SpanInfoText sx={{ fontSize: { xs: '0.8rem', md: '1.5rem' } }}>
                {'Search for a Pokémon by name'}
            </SpanInfoText>
        </Grid>
        <Grid item md={6}>
            <SearchBar />
        </Grid>
    </Grid>
);

const Home = () => {
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <SearchSection />
            <section>Filters</section>
            <section>results</section>
        </Container>
    );
};

export default Home;
