import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Home from './routes/home/home.component';
import { setTrainers } from './store/trainers/trainer.action';
import trainersFile from './trainers.json';
import { getPokemonData } from './services/pokemon.services';
import { setPokemon, setPokemonCount } from './store/pokemon/pokemon.action';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTrainers(trainersFile));
        async function getPokemons() {
            const pokemonData = await getPokemonData();
            const pokemonResults = [...pokemonData.results];
            const pokemonCount = pokemonData.count;

            dispatch(setPokemon(pokemonResults));
            dispatch(setPokemonCount(pokemonCount));
        }
        getPokemons();
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
