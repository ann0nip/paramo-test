import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TypeChip } from '../../components/pokemon-card/pokemon-card.component';
import { getPokemonDetails as getPokemonDetailsService } from '../../services/pokemon.services';

const PokemonDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getPokemonDetails() {
            const pokemonDetails = await getPokemonDetailsService(
                params.pokemonId
            );

            console.log(pokemonDetails);
            setPokemon(pokemonDetails);
        }
        if (params.pokemonId) {
            getPokemonDetails();
        }
    }, [params]);

    const handleBackButton = () => navigate(-1);

    return (
        <Container
            maxWidth="xl"
            sx={{ backgroundColor: 'primary.light', height: '100%' }}
        >
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
                </section>
            )}
        </Container>
    );
};

export default PokemonDetails;
