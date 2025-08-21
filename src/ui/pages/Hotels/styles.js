import {styled} from '@mui/system';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

export const Wrapper = styled(Box)({
    backgroundColor: 'azure',
    boxSizing: 'border-box',
    padding: '50px 0',
});
export const Title = styled(Typography)({
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '110%',
    marginBottom: '30px',
    color: '#00bcd4',
});
