import {Box, styled, Typography} from "@mui/material";
import BgForm from './../../../assets/images/bgForm.jpeg';

export const MainWrapper = styled(Box)({
    backgroundColor: '#adadad',
    backgroundImage: `url(${BgForm})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '100px 0',
});
export const TopContent = styled(Box)({
    padding: '48px 0 78px 0',
    boxSizing: 'border-box',
});
export const Title = styled(Typography)({
    fontWeight: 700,
    fontSize: '35px',
    lineHeight: 1.1,
    color: '#fff',
    marginBottom: '25px',
});
export const Text = styled(Typography)({
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: 1.1,
    color: '#fff',
});