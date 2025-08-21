import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup, InputAdornment, Slider, Stack, Switch, TextField, Typography
} from "@mui/material";
import React, {useState} from "react";
import Button from "../Button/Button.jsx";
import {useDispatch} from "react-redux";
import {setFilters} from "../../../engine/core/hotels/slice.js";

function FilterNav() {
    const dispatch = useDispatch();

    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);
    const [priceRange, setPriceRange] = useState([100, 500]);
    const [withPhone, setWithPhone] = useState(false);

    const countries = ['New York', 'Boston'];
    const stars = [1,2,3,4,5];

    const applyFilters = () => {
        dispatch(setFilters({
            countries: selectedCountries,
            stars: selectedStars,
            priceRange,
            withPhone
        }));
    }
    const handleSliderChange = (event) => {
        setPriceRange(event.target.value);
    }
    const handleInputChange = (index) => (event) => {
        const value = Number(event.target.value);
        const updatedRange = [...priceRange];
        updatedRange[index] = value;
        setPriceRange(updatedRange);
    }

    const handleChange = (event) => {
        setWithPhone(event.target.checked);
    };

    const resetFilters = () => {
        setSelectedCountries([]);
        setSelectedStars([]);
        setPriceRange([0, 1000]);
        setWithPhone(false);

        dispatch(setFilters({
            countries: [],
            stars: [],
            priceRange: [0, 1000],
            withPhone: false
        }))
    }

    return (
        <Box component="form" sx={{ display: "flex", flexDirection: 'column', gap: '20px', margin: 0 }}>
            <FormGroup>
                <Typography sx={{ mb: 1, fontWeight: 700, fontSize: '15px' }} variant="h6" component="h6">
                    Filter by country
                </Typography>
                {
                    countries.map((country) => (
                        <FormControlLabel
                            key={country}
                            control={
                                <Checkbox
                                    checked={selectedCountries.includes(country)}
                                    onChange={(event) => {
                                        const updated = event.target.checked ?
                                            [...selectedCountries, country] :
                                            selectedCountries.filter((item) => item !== country);
                                        setSelectedCountries(updated);
                                    }
                                }
                                />
                            }
                            label={
                                <Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
                                    {country}
                                </Typography>
                            }
                        />
                    ))
                }
            </FormGroup>
            <FormGroup>
                <Typography sx={{ mb: 1, fontWeight: 700, fontSize: '15px' }} variant="h6" component="h6">
                    Filter by stars
                </Typography>
                {
                    stars.map((star) => (
                        <FormControlLabel
                            key={star}
                            control={
                                <Checkbox
                                    checked={selectedStars.includes(star)}
                                    onChange={(event) => {
                                        const updated = event.target.checked
                                            ? [...selectedStars, star] :
                                            selectedStars.filter((item) => item !== star);
                                        setSelectedStars(updated);
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
                                    {'★'.repeat(star) + '☆'.repeat(stars.length - star)}
                                </Typography>
                            }
                        />
                    ))
                }
            </FormGroup>
            <FormGroup sx={{ width: 300, m: 2 }}>
                <Typography sx={{ mb: 1, fontWeight: 700, fontSize: '15px' }} variant="h6" component="h6">
                    Filter by price per night
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                        label="From"
                        type="number"
                        size="small"
                        value={priceRange[0]}
                        onChange={handleInputChange(0)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">$</InputAdornment>,
                        }}
                        inputProps={{ min: 0, max: priceRange[1] }}
                    />

                    <TextField
                        label="To"
                        type="number"
                        size="small"
                        value={priceRange[1]}
                        onChange={handleInputChange(1)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">$</InputAdornment>,
                        }}
                        inputProps={{ min: priceRange[0], max: 1000 }}
                    />
                </Box>

                <Slider
                    value={priceRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    step={1}
                />
            </FormGroup>
            <FormGroup>
                <Typography sx={{ mb: 1, fontWeight: 700, fontSize: '15px' }} variant="h6" component="h6">
                    Filter by phone
                </Typography>
                <FormControlLabel
                    control={<Switch checked={withPhone} onChange={handleChange} />}
                    label="Show with phone"
                />
            </FormGroup>
            <Stack spacing={2} direction="row">
                <Button onClick={resetFilters}>Reset</Button>
                <Button onClick={applyFilters}>Apply</Button>
            </Stack>
        </Box>
    )
}
export default FilterNav;