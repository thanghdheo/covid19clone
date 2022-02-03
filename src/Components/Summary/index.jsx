import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HighMap from '../Charts/HighMaps';
import LineChart from '../Charts/LineChart';

function Summary(props) {
  const {report,selectedCountry} = props

  const [mapData,setMapData] = useState({})

  console.log(selectedCountry)

  useEffect(() => {
    if(selectedCountry){
      import(`@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`)
        .then(res => setMapData(res))
    }
  },[selectedCountry])
  return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
            <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
            <HighMap mapData = {mapData} />
        </Grid>
      </Grid>
  );
}

export default Summary;
