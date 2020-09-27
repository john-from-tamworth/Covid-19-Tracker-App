import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
  return (
    <Card className='infoBox'>
      <CardContent>
        <Typography className='infoBox__title' colour='textSecondary'>
          {title}
          <h2 className='infoBox__cases'>{cases}</h2>
          <Typography className='infoBpc__total' color='textSecondary'>
            {total}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
