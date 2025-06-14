import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";
import {red} from "@mui/material/colors";
import PropTypes from "prop-types";

function SelectField(props) {
    const { control, error, name, id } = props;
    return (
        <FormControl sx={{width:'100%'}}>
            <InputLabel id={id} sx={{ color: '#fff' }}>{name}</InputLabel>
            <Controller
                control={control}
                rules={{ required: 'Field is required' }}
                name={name}
                render={({ field }) => (
                    <Select
                        {...field}
                        value={field.value ?? ''}
                        labelId={id}
                        label={name}
                        sx={{ color: '#fff' }}
                        error={!!error}
                    >
                        <MenuItem value=""><em>Test</em></MenuItem>
                        <MenuItem value="test2">Test2</MenuItem>
                        <MenuItem value="test3">Test3</MenuItem>
                    </Select>
                )}
            />
            { error && <FormHelperText sx={{ color: red }}>{error}</FormHelperText> }
        </FormControl>
    )
}

SelectField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
};
export default SelectField;