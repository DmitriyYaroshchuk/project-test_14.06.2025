import {useForm} from "react-hook-form";
import TextField from "./TextField/TextField.jsx";
import {Grid} from "@mui/material";
import SelectField from "./SelectField/SelectField.jsx";

function From() {
    const { register, handleSubmit, formState : { errors }, control } = useForm({
        defaultValues: {
            destination: '',
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid size={2} >
                    <TextField
                        register={register}
                        name="adults"
                        label="Enter adults"
                        variant="outlined"
                        error={errors.adults}
                    />
                </Grid>
                <Grid size={3}>
                    <SelectField
                        name="destination"
                        id="destination-label"
                        control={control}
                        error={errors.destination}
                    />
                </Grid>
            </Grid>
        </form>
    )
}
export default From;