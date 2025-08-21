import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";
import {red} from "@mui/material/colors";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

function SelectField(props) {
    const destinations = useSelector(state => state.destinations.items);
    const { control, error, name, id } = props;
    return (
        <FormControl sx={{
            width:'100%',
            '& .MuiFormHelperText-root': {
                color: 'red',
                fontWeight: 'bold',
            }
        }}>
            <InputLabel id={id} sx={{ color: '#605f5f' }}>{name}</InputLabel>
            <Controller
                control={control}
                rules={{ required: 'Field is required' }}
                name={name}
                render={({ field }) => (
                    <Select
                        {...field}
                        sx={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '4px'
                        }}
                        value={field.value ?? ''}
                        labelId={id}
                        label={name}
                        error={!!error}
                    >
                        {
                            destinations.map((item) => (
                                <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                            ))
                        }
                    </Select>
                )}
            />
            {error ? <FormHelperText>{error?.message}</FormHelperText> : null}
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