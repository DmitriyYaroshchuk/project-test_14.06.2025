import {FormControl, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSortValue} from "../../../engine/core/hotels/slice.js";


function FilterSelect(props) {
    const { className } = props;
    const dispatch = useDispatch();
    const sortValue = useSelector(state => state.hotels.sortedValue);

    return (
        <FormControl sx={{ m: 1, minWidth: 210, padding: 0, marginBottom: '30px', marginLeft: 'auto' }}>
            <Select
                value={sortValue}
                onChange={(event) => {
                    dispatch(setSortValue(event.target.value))
                }}
                displayEmpty
                className={className}
                sx={{
                    '& .MuiSelect-select': {
                        padding: 1,
                    } }}
            >
                <MenuItem value="" disabled>
                    <em>Sort by</em>
                </MenuItem>
                <MenuItem value="price-up">Sort by / Price increase</MenuItem>
                <MenuItem value="price-down">Sort by / Price decrease</MenuItem>
                <MenuItem value="rating-up">Sort by / Rating increase</MenuItem>
                <MenuItem value="rating-down">Sort by / Rating decrease</MenuItem>
                <MenuItem value="common">Default</MenuItem>
            </Select>

        </FormControl>
    )
}
export default FilterSelect;