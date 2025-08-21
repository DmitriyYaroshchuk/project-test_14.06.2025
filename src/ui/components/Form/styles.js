import TextField from "./TextField/TextField.jsx";
import {styled} from "@mui/system";
import Button from "../Button/Button.jsx";

export const StyledTextField = styled(TextField)({
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: '4px',
    '& .MuiFormHelperText-root': {
        color: 'red',
        fontWeight: 'bold',
    }
});

export const StyledButton = styled(Button)({
    width: '100%',
    padding: '10px 16px',

});