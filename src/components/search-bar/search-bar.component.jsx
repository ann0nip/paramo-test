import { Box, Button, styled, TextField } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/app/app.action';

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
    const dispatch = useDispatch();

    const handleSearch = () => {
        const currentValue = inputRef.current.value.toLowerCase();
        dispatch(setSearchQuery(currentValue));
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
