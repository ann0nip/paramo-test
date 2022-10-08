import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';

export default function FilterSection() {
    const [filterActive, setFilterActive] = useState(0);
    const filtersOptions = [
        {
            id: 0,
            label: 'Lowest Number',
        },
        {
            id: 1,
            label: 'Highest Number',
        },
        {
            id: 2,
            label: 'A-Z',
        },
        {
            id: 3,
            label: 'Z-A',
        },
    ];

    const handleActiveButton = (id) => setFilterActive(id);

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
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
                                            filterActive === filter.id
                                                ? '#FFF'
                                                : '#E3350D',
                                        border: '1px solid #E3350D',
                                        backgroundColor:
                                            filterActive === filter.id
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
