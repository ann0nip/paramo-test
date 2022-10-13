import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    styled,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const TypeChip = styled(Chip)(({ label }) => {
    switch (label) {
        case 'normal': {
            return {
                backgroundColor: '#A8A878',
            };
        }

        case 'fire': {
            return {
                backgroundColor: '#F08030',
            };
        }

        case 'water': {
            return {
                backgroundColor: '#6890F0',
            };
        }

        case 'grass': {
            return {
                backgroundColor: '#78C850',
            };
        }

        case 'electric': {
            return {
                backgroundColor: '#F8D030',
            };
        }

        case 'ice': {
            return {
                backgroundColor: '#98D8D8',
            };
        }

        case 'fighting': {
            return {
                backgroundColor: '#C03028',
            };
        }

        case 'poison': {
            return {
                backgroundColor: '#A040A0',
            };
        }

        case 'ground': {
            return {
                backgroundColor: '#E0C068',
            };
        }

        case 'flying': {
            return {
                backgroundColor: '#A890F0',
            };
        }

        case 'psychic': {
            return {
                backgroundColor: '#F85888',
            };
        }

        case 'bug': {
            return {
                backgroundColor: '#A8B820',
            };
        }

        case 'rock': {
            return {
                backgroundColor: '#B8A038',
            };
        }

        case 'ghost': {
            return {
                backgroundColor: '#705898',
            };
        }

        case 'dragon': {
            return {
                backgroundColor: '#7038F8',
            };
        }

        case 'dark': {
            return {
                backgroundColor: '#705848',
            };
        }

        case 'steel': {
            return {
                backgroundColor: '#B8B8D0',
            };
        }

        case 'fairy': {
            return {
                backgroundColor: '#F0B6BC',
            };
        }

        default: {
            return {
                backgroundColor: '#1b1719',
            };
        }
    }
});

export default function PokemonCard({ pokemon }) {
    const { id, name, image, types } = pokemon;
    return (
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Typography
                        variant="h6"
                        sx={{
                            position: 'absolute',
                            margin: '8px',
                            paddingX: '2px',
                            right: '0',
                            backgroundColor: 'secondary.dark',
                            color: '#FFF',
                            borderRadius: '5px',
                        }}
                    >
                        {`#${id}`}
                    </Typography>
                    {image && (
                        <CardMedia
                            sx={{ objectFit: 'contain' }}
                            component="img"
                            height="240"
                            image={image}
                            alt={name}
                        />
                    )}
                    {!image && (
                        <ImageNotSupportedIcon
                            fontSize="large"
                            sx={{
                                height: 240,
                                display: 'flex',
                                margin: '0 auto',
                            }}
                        />
                    )}
                    <CardContent>
                        <Typography
                            sx={{ textTransform: 'capitalize' }}
                            noWrap
                            variant="h5"
                            component="div"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        ></Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {types.map(({ slot, type }) => (
                        <TypeChip
                            key={slot}
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                color: '#FFF',
                            }}
                            label={type.name}
                        />
                    ))}
                </CardActions>
            </Card>
        </Link>
    );
}
