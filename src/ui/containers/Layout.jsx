import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";
import { green, indigo} from "@mui/material/colors";
import Header from "./../components/Header/Header.jsx";
import Footer from "./../components/Footer/Footer.jsx";
const theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
        },
        secondary: {
            main: green[500],
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    boxSizing: 'border-box',
                },
                '*, *::before, *::after': {
                    boxSizing: 'inherit',
                },
                a: {
                    textDecoration: 'none',
                    color: 'inherit',
                },
                ul: {
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                },
                img: {
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                },
                body: {
                    backgroundColor: '#f9f9f9',
                    fontFamily: '"Roboto", sans-serif',
                    fontStyle: "normal",
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: 1.1,
                    margin: 0,
                    padding: 0,
                    color: '#05055d',
                    textWrap: 'balance'
                },
            },
        },
    },
});

function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Outlet/>
            <Footer/>
        </ThemeProvider>

    )
}
export default Layout;