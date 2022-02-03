import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './style.scss'
function HighlightCart(props) {
    const {title,count,type} = props

    return (
    <Grid item sm={4} xs={12} className='highlight'>
        <Card className={'highlight_card' + (type === 'confirmed' ? ' highlight_card_confirmed' : '' || type === 'recovered' ? ' highlight_card_recovered' : '' )}>
            <CardContent>
                <Typography component="p" variant='body2'  className='highlight_title'>{title}</Typography>
                <Typography component="span" variant='body2' className='highlight_count'>{count}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

export default HighlightCart;
