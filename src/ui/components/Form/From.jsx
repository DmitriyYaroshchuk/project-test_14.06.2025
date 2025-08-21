import {useForm} from "react-hook-form";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {destinationsAsyncActions} from "../../../engine/core/destinations/asyncActions.js";
import {hotelsAsyncActions} from "../../../engine/core/hotels/asyncActions.js";
import {useNavigate} from "react-router-dom";
import {links} from "../../../engine/config/routers.jsx";
import SelectField from "./SelectField/SelectField.jsx";
import BasicDatePicker from "./DatePicker/DatePicker.jsx";
import {StyledButton, StyledTextField} from "./styles.js";

function From() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loadingDestinations = useSelector(state => state.destinations.loading);
    const loadingHotels = useSelector(state=> state.hotels.loading);
    const hasLoaded = useSelector(state => state.hotels.hasLoaded);
    const { register, handleSubmit, formState : { errors }, control } = useForm({
        defaultValues: {
            destination: '',
            date: null,
        },
        mode: 'onSubmit'
    });

    const onSubmit = async (data) => {
        await dispatch(hotelsAsyncActions.getHotelsAsync());
        console.log(data);
    };

    useEffect(() => {
        if(!loadingHotels && hasLoaded) {
            navigate(links.hotels);
        }
    },  [loadingHotels]);

    useEffect(() => {
        dispatch(destinationsAsyncActions.getDestinationsAsync())
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid size={2} >
                    <StyledTextField
                        register={register}
                        name="adults"
                        label="Adults"
                        variant="outlined"
                        error={errors.adults}
                        disabled={loadingDestinations}
                        pattern={/^(?:1[01][0-9]|120|[1-9]?[0-9])$/}
                    />
                </Grid>
                <Grid size={2} >
                    <StyledTextField
                        register={register}
                        name="children"
                        label="Children"
                        variant="outlined"
                        error={errors.adults}
                        disabled={loadingDestinations}
                        pattern={/^(?:1[01][0-9]|120|[1-9]?[0-9])$/}
                    />
                </Grid>
                <Grid size={2}>
                    <SelectField
                        name="destination"
                        id="destination-label"
                        control={control}
                        error={errors.destination}
                    />
                </Grid>
                <Grid size={2}>
                    <BasicDatePicker
                        control={control}
                        name="date-in"
                        label="Check-in Date"
                        error={errors.date}
                        id="check-in-date"
                    />
                </Grid>
                <Grid size={2}>
                    <BasicDatePicker
                        control={control}
                        name="date-out"
                        label="Check-out Date"
                        error={errors.date}
                        id="check-out-date"
                    />
                </Grid>
                <Grid size={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StyledButton
                        type="submit"
                        disabled={loadingHotels || loadingDestinations}
                        loading={loadingHotels || loadingDestinations}>
                        Send
                    </StyledButton>
                </Grid>
            </Grid>
        </form>
    )
}
export default From;