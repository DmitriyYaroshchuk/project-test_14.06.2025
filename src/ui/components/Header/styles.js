import {Box, styled} from "@mui/material";

export const Wrapper = styled(Box)(({theme}) => {
    return ({
        width: "100%",
        padding: '20px 24px',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            backgroundColor: 'transparent',
        }
    })
});
export const InnerWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});
export const Content = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 10
})