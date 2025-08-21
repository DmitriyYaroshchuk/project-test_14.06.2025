import Main from "../../ui/pages/Main.jsx";
import About from "../../ui/pages/About.jsx";
import Hotels from "../../ui/pages/Hotels/Hotels.jsx";
import HotelDetails from "../../ui/components/HotelDetails/HotelDetails.jsx";

export const links = {
    main: '/',
    about: '/about',
    hotels: '/hotels',
    hotelDetails: '/hotel/:id'
}
export default [
    {
        link: links.main,
        element: <Main/>
    },
    {
        link: links.about,
        element: <About/>
    },
    {
        link: links.hotels,
        element: <Hotels/>
    },
    {
        link: links.hotelDetails,
        element: <HotelDetails/>
    }
]