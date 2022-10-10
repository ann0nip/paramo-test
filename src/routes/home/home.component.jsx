import { useContext, useEffect } from 'react';
import { Button, Container, Grid, styled } from '@mui/material';
import FilterSection from '../../components/filter-section/filter-section.component';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import { AppContext } from '../../contexts/app.context';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../../store/pokemon/pokemon.selector';

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

const LoadMoreButton = ({ handleLoadMore }) => (
    <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
                onClick={handleLoadMore}
                variant="contained"
                color={'secondary'}
                sx={{ margin: '25px', padding: '15px' }}
            >
                Load more Pokémon
            </Button>
        </Grid>
    </Grid>
);
const Home = () => {
    // const { pokemons, page, setPage, getPokemon, orderBy, query } =
    //     useContext(AppContext);

    // useEffect(() => {
    //     getPokemon();
    // }, [page, query, orderBy]);

    // const handleLoadMore = () => setPage(page + 1);
    const pokemons = useSelector(selectPokemons);
    console.log(pokemons);
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <SearchSection />
            <hr />
            {/* <FilterSection orderBy={orderBy} /> */}
            <hr />
            <Grid container spacing={2}>
                {pokemons.length &&
                    pokemons.map((pokemon) => (
                        <Grid key={pokemon.id} item xs={12} md={3}>
                            <PokemonCard pokemon={pokemon} />
                        </Grid>
                    ))}
            </Grid>
            {/* <LoadMoreButton handleLoadMore={handleLoadMore} /> */}
        </Container>
    );
};

export default Home;
