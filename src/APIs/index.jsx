import axios from 'axios';
import React from 'react';

export const getCountries = () => 
    axios.get('https://api.covid19api.com/countries')

export const getReportByCountry = (country) => 
    axios.get(`https://api.covid19api.com/dayone/country/${country}`)
