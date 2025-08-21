import {styled} from '@mui/system';
import {Card, Typography} from '@mui/material';
import Button from './../Button/Button.jsx';

export const CustomCard = styled(Card)({
    width: '100%',
    paddingBottom: '15px',
    transition: '0.3s all ease-in-out',
    '&:hover': {
        backgroundColor: '#eee',
        boxShadow: '2px 2px 15px 1px #000000',
    },
});
export const Name = styled(Typography)({
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '110%',
    marginBottom: '30px',
});
export const Text = styled(Typography)({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '110%',
    marginBottom: '10px',
});
export const PhoneNumber = styled(Typography)({
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '110%',
    marginBottom: '15px',
    display: 'flex',
    gap: '15px'
    // '&::before': {
    //     content: "''",
    //     backgroundImage: `url(${logoPhone})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'contain',
    //     marginRight: '10px',
    //     width: '20px',
    //     height: '20px',
    // },
});
export const HotelRating = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5.6px 5.6px 5.6px 0',
    width: '30px',
    height: '30px',
    marginLeft: 'auto',
    backgroundColor: '#003b95',
    color: '#fff',
});

export const HotelStars = styled(Typography)({
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.1,
    color: '#003b95',
    marginBottom: '20px'
});

export const HotelPrice = styled(Typography)({
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: 1.1,
    marginBottom: '20px'
})

export const CustomButton = styled(Button)({
    border: '2px solid #4286de',
    backgroundColor: '#fff',
    color: '#4286de',
    margin: '0 auto',
    transition: '0.4s all ease-in-out',
    '&:hover': {
        color: '#fff',
    },
});
