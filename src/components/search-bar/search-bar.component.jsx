import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.secondary.light,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.secondary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.secondary.dark,
        },
        color: '#FFF',
    },
}));

const button_styles = {
    marginLeft: { md: '1rem' },
    marginTop: { xs: '1rem', md: 0 },
    boxShadow: 'none',
    '&:hover': { boxShadow: 'none' },
};

const box_styles = {
    width: '100%',
    paddingY: { md: '2rem' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
};

const SearchBar = () => {
    const inputRef = useRef(null);

    const handleSearch = () => {
        console.log(inputRef.current.value);
    };

    return (
        <Box sx={box_styles}>
            <CustomTextField inputRef={inputRef} fullWidth />
            <Button
                sx={button_styles}
                color="secondary"
                variant="contained"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
