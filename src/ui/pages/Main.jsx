import {Box} from "@mui/material";
import Hero from "../components/Hero/Hero.jsx";
import Newsletter from "../components/NewsLetter/Newsletter.jsx";
import EnrollApartment from "../components/EnrollApartment/EnrollApartment.jsx";

function Main() {
    return (
        <Box component="main">
            <Hero/>
            <Newsletter/>
            <EnrollApartment/>
        </Box>
    )
}
export default Main;