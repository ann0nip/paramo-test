import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    styled,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SortOptions = [
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

export const SortButton = styled(Button)(({ orderby, sortvalue }) => {
    return {
        boxShadow: 'none',
        color: orderby === sortvalue ? '#FFF' : '#E3350D',
        border: '1px solid #E3350D',
        backgroundColor: orderby === sortvalue ? '#E3350D' : '#FFF',
        '&:hover': {
            color: '#FFF',
            backgroundColor: '#E3350D',
            boxShadow: 'none',
        },
    };
});

export default function FilterSection({ orderBy = 'numAsc' }) {
    const navigate = useNavigate();

    const handleActiveButton = (id) => {
        navigate(`/?orderBy=${SortOptions[id].value}`);
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="filters-options-content"
                    id="filters-options-header"
                >
                    <Typography>Sort Pokemon by:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        {SortOptions.map((sort) => (
                            <Grid
                                key={sort.id}
                                item
                                xs={6}
                                md={3}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <SortButton
                                    data-testid="sort-button"
                                    onClick={() => handleActiveButton(sort.id)}
                                    variant="contained"
                                    orderby={orderBy}
                                    sortvalue={sort.value}
                                >
                                    {sort.label}
                                </SortButton>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
