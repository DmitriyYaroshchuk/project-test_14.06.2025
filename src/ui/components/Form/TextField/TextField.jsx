import TextFieldMUI from "@mui/material/TextField";
import PropTypes from "prop-types";
function TextField(props) {
    const { register, error, name, label, variant } = props;

    return (
        <TextFieldMUI
            sx={{
                input: {color: 'white'},
                label: {color: 'white'},
            }}
            label={label}
            variant={variant}
            { ...register(name, {
                required: 'This field is required'
            })}
            error={!!error}
            helperText={error ? error : null}

        />
    )
}

TextField.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
};
export default TextField;