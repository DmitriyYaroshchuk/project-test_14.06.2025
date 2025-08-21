import {Container} from '@mui/material';
import {Form, StyledButton, StyledTextField, Text, Title, Wrapper} from './styles';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setStatus} from "../../../engine/core/popup/popupSlice.js";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";


export default function Newsletter() {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState : { errors } } = useForm({
        mode: 'onSubmit'
    });
    const onSubmit = async (data) => {
        dispatch(setStatus(true));
        console.log(data);
        reset();
    };
    return (
        <Wrapper>
            <Container>
                <Title component="h5" variant="h5">Save time and money!</Title>
                <Text component="p" variant="p">Subscribe and we will send you the best offers</Text>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <StyledTextField
                        register={register}
                        name="email"
                        label="Enter email"
                        variant="outlined"
                        error={errors.email}
                        pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                    />
                    <StyledButton
                        type="submit">
                        Send
                    </StyledButton>
                </Form>
            </Container>
            <ModalWindow/>
        </Wrapper>
    );
}
