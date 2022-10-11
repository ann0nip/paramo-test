import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const filtersOptions = [
    {
        id: 0,
        label: 'Lowest Number',
        value: 'numAsc',
    },
    {
        id: 1,
        label: 'Highest Number',
        value: 'numDesc',
    },
    {
        id: 2,
        label: 'A-Z',
        value: 'A-Z',
    },
    {
        id: 3,
        label: 'Z-A',
        value: 'Z-A',
    },
];

export default function FilterSection({ orderBy = 'numAsc' }) {
    const navigate = useNavigate();

    const handleActiveButton = (id) => {
        navigate(`/?orderBy=${filtersOptions[id].value}`);
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="filters-options-content"
                    id="filters-options-header"
                >
                    <Typography>Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        {filtersOptions.map((filter) => (
                            <Grid
                                key={filter.id}
                                item
                                xs={6}
                                md={3}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    onClick={() =>
                                        handleActiveButton(filter.id)
                                    }
                                    variant="contained"
                                    sx={{
                                        boxShadow: 'none',
                                        color:
                                            orderBy === filter.value
                                                ? '#FFF'
                                                : '#E3350D',
                                        border: '1px solid #E3350D',
                                        backgroundColor:
                                            orderBy === filter.value
                                                ? '#E3350D'
                                                : '#FFF',
                                        '&:hover': {
                                            color: '#FFF',
                                            backgroundColor: '#E3350D',
                                            boxShadow: 'none',
                                        },
                                    }}
                                >
                                    {filter.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
