import Main from "../../ui/pages/Main.jsx";
import About from "../../ui/pages/About.jsx";

export const links = {
    main: '/',
    about: '/about',
    // hotels: '/hotels'
}
export default [
    {
        link: links.main,
        element: <Main/>
    },
    {
        link: links.about,
        element: <About/>
    }
]