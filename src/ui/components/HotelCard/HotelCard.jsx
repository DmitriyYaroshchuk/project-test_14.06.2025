import {
    CardActions, CardContent, CardMedia,
} from '@mui/material';
import {
    CustomButton,
    CustomCard, HotelPrice,
    HotelStars, Name, PhoneNumber, Text,
} from './styles';
import HotelImg from './../../../assets/images/hotelImg.jpg';
import PhoneIcon from './../../../assets/images/phone.svg'
import renderStars from "../../../engine/core/hotels/renderStars.js";
import {useNavigate} from "react-router-dom";

export default function HotelCard(props) {
    const { id, name, address, city, countryCode, phoneNumber, stars, price } = props;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/hotel/${id}`);
    }
    return (
        <CustomCard onClick={handleClick} sx={{ cursor: 'pointer' }}>
            <CardMedia
                component="img"
                height="140"
                image={HotelImg}
                alt="hotel"
            />
            <CardContent>
                <Name gutterBottom variant="h5" component="div">{name}</Name>
                <Text variant="body2" color="text.secondary">{address}, {city}, {countryCode}</Text>
                <HotelStars>
                    {
                        renderStars(stars)
                    }
                </HotelStars>
                <PhoneNumber component="a" href={phoneNumber || '#'}>
                    <CardMedia
                        component="img"
                        image={PhoneIcon}
                        alt="Phone Icon"
                        sx={{
                            width: 20,
                            height: 20,
                        }}
                    />
                    {phoneNumber ? `+${phoneNumber}` : 'No phone number'}
                </PhoneNumber>
                <HotelPrice>{`${price}$/per night`}</HotelPrice>
            </CardContent>
            <CardActions>
                <CustomButton>Забронировать этот отель</CustomButton>
            </CardActions>
        </CustomCard>
    );
}
