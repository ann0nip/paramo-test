import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import FilterSection from '../../components/filter-section/filter-section.component';
import LoadMoreSection from '../../components/load-more-section/load-more-section.component';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemons } from '../../store/pokemon/pokemon.selector';
import { selectApp } from '../../store/app/app.selector';
import { incrementPage, setOrderBy } from '../../store/app/app.action';
import { getPokemonData } from '../../services/pokemon.services';
import { setPokemon } from '../../store/pokemon/pokemon.action';
import SearchSection from '../../components/search-section/search-section.component';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const { results: pokemons, count: limit } = useSelector(selectPokemons);
    const { page, query, orderBy } = useSelector(selectApp);

    useEffect(() => {
        const orderBy = searchParams.get('orderBy');
        dispatch(setOrderBy(orderBy));
    }, [dispatch, searchParams]);

    useEffect(() => {
        console.log({
            page,
            query,
            orderBy,
            limit,
        });
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

    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <SearchSection />
            <hr />
            <FilterSection orderBy={orderBy} />
            <hr />
            <Grid container spacing={2}>
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
