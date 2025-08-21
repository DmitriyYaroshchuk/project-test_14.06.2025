import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from "../Button/Button.jsx";
import TextField from "../Form/TextField/TextField.jsx";

export const Wrapper = styled(Box)({
  position: 'relative',
  padding: '50px 0',
  boxSizing: 'border-box',
  backgroundColor: '#00224f',
  textAlign: 'center'
});
export const Title = styled(Typography)({
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '110%',
  marginBottom: '10px',
  color: '#fff',
});
export const Text = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '110%',
  marginBottom: '20px',
  color: '#bdbdbd',
});
export const Form = styled("form")({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 35,
  margin: '0 auto',
});
export const StyledTextField = styled(TextField)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  borderRadius: '4px',
  '& .MuiFormHelperText-root': {
    color: 'red',
    fontWeight: 'bold',
  },
  maxWidth: '300px',
  width: '100%',
})
export const StyledButton = styled(Button)({
  maxWidth: '150px',
  width: '100%',
  padding: '11px 16px'
})
