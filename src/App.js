import './App.css';
import CountrySelector from './Components/CountrySelector';
import Highlight from './Components/Highlight';
import Summary from './Components/Summary';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './APIs';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';



function App() {

  const [countries,setCountry] = useState([])

  const [selectedCountry,setSelectedCountry] = useState('vn')

  const [reports,setReport] = useState([])

  useEffect(() => {
    getCountries()
    .then(res =>{
      const countries = sortBy(res.data,'Country')
      setCountry(countries)
    })
  },[])

  const handleChange = (e) => {
    setSelectedCountry(e.target.value)
 }

  useEffect(() => {
    const country = countries.find(country => country.ISO2.toLowerCase() === selectedCountry)
    const {Slug} = country? country : ''

    Slug && getReportByCountry(Slug)
      .then(res =>{
        console.log(res)
        res.data.pop()
        setReport(res.data)
      })
  },[selectedCountry,countries])

  return (
    <Container >
      <Typography variant='h2' component='h2'>Số liệu COVID-19</Typography>
      <Typography component='p'>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleChange={handleChange} value={selectedCountry}/>
      <Highlight report={reports} />
      <Summary report={reports} selectedCountry={selectedCountry}/>
    </Container>
  );
}

export default App;
