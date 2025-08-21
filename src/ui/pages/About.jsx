import {Box} from "@mui/material";
import AboutBooking from "../components/AboutBooking/AboutBooking.jsx";
import Offices from "../components/Offices/Offices.jsx";
import Offers from "../components/Offers/Offers.jsx";

function About() {
    return (
        <Box component="main">
           <AboutBooking/>
            <Offices/>
            <Offers/>
        </Box>
    )
}
export default About;