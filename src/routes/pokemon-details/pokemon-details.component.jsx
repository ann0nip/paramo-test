import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TypeChip } from '../../components/pokemon-card/pokemon-card.component';
import { getPokemonDetails as getPokemonDetailsService } from '../../services/pokemon.services';
import { selectTrainers } from '../../store/trainers/trainer.selector';

const PokemonDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { trainers } = useSelector(selectTrainers);
    const [pokemon, setPokemon] = useState(null);
    const [trainersPerPokemon, setTrainersPerPokemon] = useState([]);

    useEffect(() => {
        async function getPokemonDetails() {
            const pokemonDetails = await getPokemonDetailsService(
                params.pokemonId
            );
            setPokemon(pokemonDetails);
        }
        function getListOfTrainers() {
            const pokemonId = Number(params.pokemonId);

            const listOfTrainers = trainers.filter((trainer) =>
                trainer.box.includes(pokemonId)
            );
            setTrainersPerPokemon(listOfTrainers);
        }

        if (params.pokemonId) {
            getPokemonDetails();
        }
        if (trainers) {
            getListOfTrainers();
        }
    }, [params, trainers]);

    const handleBackButton = () => navigate(-1);

    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'primary.light' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleBackButton}
                    >
                        <ArrowBackIcon /> Back
                    </Button>
                </Grid>
            </Grid>
            {pokemon && (
                <section>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginY: { xs: '15px' },
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                marginRight: '5px',
                            }}
                        >
                            {pokemon.name.toUpperCase()}
                        </Typography>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color={'whitesmoke'}
                        >
                            {`#${pokemon.id}`}
                        </Typography>
                    </Box>
                    <Grid
                        container
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                sx={{ objectFit: 'contain' }}
                                component="img"
                                height="240"
                                image={pokemon.image}
                                alt={pokemon.name}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            md={6}
                            sx={{
                                backgroundColor: '#F2F2F2',
                                borderRadius: '10px',
                                padding: '15px',
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    {`Weight: ${pokemon.weight * 0.1} KG`}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                    {`Height: ${pokemon.height * 10} cm`}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" gutterBottom>
                                    {`Type:`}
                                </Typography>
                                {pokemon.types.map(({ slot, type }) => (
                                    <TypeChip
                                        key={slot}
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            color: '#FFF',
                                            margin: '1px',
                                        }}
                                        label={type.name}
                                    />
                                ))}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" gutterBottom>
                                    {`Abilities:`}
                                </Typography>
                                {pokemon.abilities.map(({ slot, ability }) => (
                                    <TypeChip
                                        key={slot}
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            color: '#FFF',
                                            margin: '1px',
                                        }}
                                        label={ability.name}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{}}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h5" color={'whitesmoke'}>
                                {`Trainers`}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                margin: '15px',
                            }}
                        >
                            {trainersPerPokemon.map((trainer) => (
                                <Typography
                                    key={trainer.name}
                                    variant="h6"
                                    display={'inline-block'}
                                    color={'whitesmoke'}
                                >
                                    {`🔹${trainer.name}🔹`}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </section>
            )}
        </Container>
    );
};

export default PokemonDetails;
