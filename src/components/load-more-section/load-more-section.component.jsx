import { Button, Grid } from '@mui/material';

const LoadMoreSection = ({ handleLoadMore }) => (
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
export default LoadMoreSection;
