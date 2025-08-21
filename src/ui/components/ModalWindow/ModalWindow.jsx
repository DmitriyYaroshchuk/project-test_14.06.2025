import {
    CardMedia,
    DialogActions,
} from '@mui/material';
import CheckMark from './../../../assets/images/checkMark.svg';
import Close from './../../../assets/images/close.svg';
import {
    Container, Content, Header, Text, Title, Wrapper,
} from './styles';
import Button from './../Button/Button.jsx';
import {useDispatch, useSelector} from "react-redux";
import {setStatus} from "../../../engine/core/popup/popupSlice.js";

export default function ModalWindow() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.popup.status);
    return (
        <>
            <Wrapper open={status}>
                <Container>
                    <Header>
                        <Title>Booking</Title>
                        <DialogActions>
                            <Button
                                sx={{backgroundColor: 'transparent', width: '65px'}}
                                onClick={() => dispatch(setStatus(false))}>
                                <CardMedia
                                    component="img"
                                    alt="close"
                                    image={Close}
                                    title="close"
                                />
                            </Button>
                        </DialogActions>
                    </Header>
                    <Content>
                        <Text>Спасибо, мы отправим письмо на вашу почту !</Text>
                        <CardMedia
                            component="img"
                            alt="checkMark"
                            image={CheckMark}
                            title="checkMark"
                            sx={{width: '100px', margin: '0 auto'}}
                        />
                    </Content>
                </Container>
            </Wrapper>
        </>
    );
}
