import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import FilterSection from '../../components/filter-section/filter-section.component';
import LoadMoreSection from '../../components/load-more-section/load-more-section.component';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';
import SearchSection from '../../components/search-section/search-section.component';
import Spinner from '../../components/spinner/spinner.component';
import { getPokemonData } from '../../services/pokemon.services';
import { incrementPage, setOrderBy } from '../../store/app/app.action';
import { selectApp } from '../../store/app/app.selector';
import { setPokemon } from '../../store/pokemon/pokemon.action';
import { selectPokemons } from '../../store/pokemon/pokemon.selector';
const Home = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const { results: pokemons, count: limit } = useSelector(selectPokemons);
    const { page, query, orderBy } = useSelector(selectApp);

    useEffect(() => {
        const orderBy = searchParams.get('orderBy');
        orderBy && dispatch(setOrderBy(orderBy));
    }, [dispatch, searchParams]);

    useEffect(() => {
        async function getPokemons() {
            const pokemonData = await getPokemonData({
                page,
                query,
                orderBy,
                limit,
            });
            const pokemonResults = [...pokemonData.results];

            dispatch(setPokemon(pokemonResults));
        }
        getPokemons();
    }, [dispatch, page, query, orderBy, limit]);

    const handleLoadMore = () => dispatch(incrementPage());
    console.log(pokemons);
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <SearchSection />
            <hr />
            <FilterSection orderBy={orderBy} />
            <hr />
            <Grid container spacing={2}>
                {!pokemons.length && <Spinner />}
                {pokemons.length &&
                    pokemons.map((pokemon) => (
                        <Grid key={pokemon.id} item xs={12} md={3}>
                            <PokemonCard pokemon={pokemon} />
                        </Grid>
                    ))}
            </Grid>
            <LoadMoreSection handleLoadMore={handleLoadMore} />
        </Container>
    );
};

export default Home;
