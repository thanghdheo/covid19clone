import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

function CountrySelector(props) {

    const {value,handleChange,countries} =  props

    return (
        <FormControl>
            <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleChange}
                inputProps={{
                    name: 'country',
                    id :  'country-selector'
                }}>
            {
                countries.map(country => (
                    <option value={country.ISO2.toLowerCase()} key={country.Country}>{country.Country}</option>
                ))
            }
            </NativeSelect>
            <FormHelperText>Lựa chọn thông tin quốc gia</FormHelperText>
        </FormControl>
    );
}

export default CountrySelector;
