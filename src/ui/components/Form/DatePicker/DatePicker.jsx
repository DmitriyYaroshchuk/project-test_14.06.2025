import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Controller} from "react-hook-form";
import PropTypes from "prop-types";

export default function BasicDatePicker(props) {
    const { name, control, label, error } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                defaultValue={null}
                rules={{ required: 'Field is required' }}
                render={({ field }) => (
                    <DatePicker
                        sx={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '4px', }}
                        {...field}
                        label={label}
                        value={field.value || null}
                        onChange={(date) => field.onChange(date)}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                error: !!error,
                                helperText: error ? error.message : '',
                            },
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
BasicDatePicker.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
};