import TextFieldMUI from "@mui/material/TextField";
import PropTypes from "prop-types";
function TextField(props) {
    const { register, error, name, label, variant, disabled, className, sx, pattern } = props;
    return (
        <TextFieldMUI
            className={className}
            sx={sx}
            label={label}
            variant={variant}
            disabled={disabled}
            { ...register(name, {
                required: 'This field is required',
                pattern: {
                    value: pattern,
                    message: 'Invalid field'
                }
            })}
            error={!!error}
            helperText={error?.message ?? null}
        />
    )
}

TextField.propTypes = {
    className: PropTypes.string,
    sx: PropTypes.object,
    pattern: PropTypes.object,
    register: PropTypes.func.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
};
export default TextField;