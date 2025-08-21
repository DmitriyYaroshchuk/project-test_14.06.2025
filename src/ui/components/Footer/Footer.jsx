import Box from '@mui/material/Box';
import FooterNav from '../FooterNav/FooterNav.jsx';
import Sponsors from '../Sponsors/Sponsors.jsx';

export default function Footer() {
    return (
        <footer>
            <Box>
                <FooterNav/>
                <Sponsors/>
            </Box>

        </footer>
    );
}
