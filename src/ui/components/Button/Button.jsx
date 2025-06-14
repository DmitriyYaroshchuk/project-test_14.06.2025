import ButtonMUI from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/material/Button';
import PropTypes from "prop-types";
import {LinkWrapper} from "./styles.js";

function Button(props) {
    const {children, disabled, loading, reactHref} = props;
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
                    >
                        Full width
                    </LoadingButton>
                ) : (
                    <ButtonMUI disabled={disabled} variant="contained" type="button">
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
    reactHref: PropTypes.string,
};
export default Button;