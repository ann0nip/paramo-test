import { Container, Grid, styled } from '@mui/material';
import { useContext } from 'react';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import { AppContext } from '../../contexts/app.context';

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
    const { pokemons } = useContext(AppContext);

    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <SearchSection />
            <section>Filters</section>
            <hr />
            <Grid container spacing={2}>
                {pokemons.map((pokemon) => (
                    <Grid key={pokemon.id} item xs={12} md={3}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
