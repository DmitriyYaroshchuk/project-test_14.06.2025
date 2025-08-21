import {
    Container, List, ListItem,
} from '@mui/material';
import Booking from './../../../assets/images/booking.png';
import {Text, Wrapper} from './styles';

export default function Sponsors() {
    return (
        <Wrapper>
            <Container>
                <Text>Copyright © 1996–2025
                    Booking.com™. Все права защищены.
                </Text>
                <Text>Booking.com — часть Booking Holdings Inc., мирового лидера в сфере онлайн-туризма и сопутствующих
                    услуг.</Text>
                <List sx={{display: 'flex'}}>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>
                    <ListItem>
                        <img src={Booking} alt="booking" title="booking" width="110px"/>
                    </ListItem>

                </List>
            </Container>
        </Wrapper>
    );
}
