import ButtonMUI from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/material/Button';
import PropTypes from "prop-types";
import {LinkWrapper} from "./styles.js";

function Button(props) {
    const {children, disabled, loading, reactHref, type = 'button', className, sx, onClick} = props;
    return (
        <>
            {
                loading ? (
                    <LoadingButton
                        fullWidth
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon/>}
                        variant="outlined"
                        className={className}
                        sx={sx}
                    >
                        Loading
                    </LoadingButton>
                ) : (
                    <ButtonMUI onClick={onClick} className={className} disabled={disabled} variant="contained" type={type} sx={sx}>
                        {
                            reactHref ? (<LinkWrapper to={reactHref}>{children}</LinkWrapper>)
                                : children
                        }
                    </ButtonMUI>
                )
            }
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.string,
    reactHref: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.object,
    onClick: PropTypes.func,
};
export default Button;