import {Box, Stack} from "@mui/material";
import Button from "../Button/Button.jsx";
import {links} from "../../../engine/config/routers.jsx";
import {Wrapper, InnerWrapper, Content} from "./styles.js";
import Logo from "../Logo/Logo.jsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Logo/>
                <Content>
                    <Stack spacing={2} direction="row">
                        <Button reactHref={links.main}>Home</Button>
                        <Button reactHref={links.about}>About</Button>
                    </Stack>
                    <AccountCircleIcon sx={(theme) => ({
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        fontSize: '40px',
                    })}/>
                </Content>
            </InnerWrapper>
        </Wrapper>
    )
}
export default Header;