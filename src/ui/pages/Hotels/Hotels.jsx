import {Box, Container, Grid} from '@mui/material';
import HotelCard from '../../components/HotelCard/HotelCard.jsx'
import {
    Title, Wrapper,
} from './styles';
import {useSelector} from "react-redux";
import FilterSelect from "../../components/FilterSelect/FilterSelect.jsx";
import FilterNav from "../../components/FilterNav/FilterNav.jsx";


export default function Hotels() {
    const items = useSelector(state => state.hotels.items);
    return (

        <Wrapper>
            <Container  maxWidth={false} sx={{ px: 2 }}>
                <Title component="h1" variant="h1" gutterBottom>Список отелей</Title>
                <FilterSelect/>
                <Box sx={{display: "flex", gap: '40px'}}>
                    <FilterNav/>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'stretch' }}>
                        {items.map((item) => (
                            <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }}>
                                <HotelCard
                                    id={item.id}
                                    name={item.name}
                                    address={item.address}
                                    city={item.city}
                                    countryCode={item.country_code}
                                    // hotelRating={item.hotel_rating}
                                    phoneNumber={item.phone_number}
                                    stars={item.stars}
                                    price={item.price_per_night}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Wrapper>
    );
}