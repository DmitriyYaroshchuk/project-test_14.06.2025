import {MainWrapper, TopContent, Title, Text} from "./styles.js";
import Form from "./../Form/From.jsx";
import {Container} from "@mui/material";

function Hero() {
    return (
        <MainWrapper>
            <Container>
                <TopContent>
                    <Title component="h1">Home comfort</Title>
                    <Title component="h1">The joy of travel</Title>
                    <Text>Find beach houses, chalets and more</Text>
                </TopContent>
                <Form/>
            </Container>
        </MainWrapper>
    )

}
export default Hero;