import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import hotelImg from './../../../assets/images/hotelImg.jpg';
import phone from './../../../assets/images/phone.svg';
import {useNavigate, useParams} from "react-router-dom";
import Button from "../Button/Button.jsx";
import renderStars from "../../../engine/core/hotels/renderStars.js";
import {useSelector} from "react-redux";

function HotelDetails(){
    const { id } = useParams();
    const navigate = useNavigate();

    const hotel = useSelector(state => state.hotels.items.find(item => item.id.toString() === id));

    if (!hotel) {
        return (
            <Box p={4}>
                <Typography variant="h5">Отель не найден</Typography>
                <Button sx={{ mt: 2 }} onClick={() => navigate(-1)}>Назад</Button>
            </Box>
        )
    }

    return (
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
            <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={hotelImg}
                    alt="Hotel image"
                />
                <CardContent>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        {hotel.name}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {hotel.address}, {hotel.city}, {hotel.country_code}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        <strong>Звёзды:</strong> {renderStars(hotel.stars)}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 1 }}>
                        <strong>Цена за ночь:</strong> {hotel.price_per_night}$
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <img
                            src={phone}
                            alt="Phone Icon"
                            style={{ width: 20, height: 20, marginRight: 8 }}
                        />
                        <Typography variant="body1">
                            {hotel.phone_number ? `+${hotel.phone_number}` : 'Нет номера телефона'}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                        <Button variant="contained" color="primary">
                            Забронировать этот отель
                        </Button>
                        <Button variant="outlined" onClick={() => navigate(-1)}>
                            Назад
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
export default HotelDetails;