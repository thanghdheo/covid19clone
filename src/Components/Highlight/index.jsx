import { Grid} from '@material-ui/core';
import React from 'react';
import HighlightCart from './HighlightCart';

function Highlight(props) {
  const {report} = props

  console.log(report)

  const data = report[report.length - 1]

  console.log(data)

  const summary = data && [
    {
      title : ' Số ca nhiễm',
      count : data.Confirmed,
      type : 'confirmed'
    },
    {
      title : ' Số ca khỏi',
      count : data.Recovered,
      type : 'recovered'
    },
    {
      title : ' Số ca tử vong',
      count : data.Deaths,
      type : 'deaths'
    }
  ]
  return (
      <Grid container spacing={3}>
            {summary ? summary.map(item => <HighlightCart key={item.type} title={item.title} count={item.count} type={item.type}/>) : ''}
      </Grid>
  );
}

export default Highlight;
