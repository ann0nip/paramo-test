import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                marginTop: '15px',
                justifyContent: 'center',
            }}
        >
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Spinner;
