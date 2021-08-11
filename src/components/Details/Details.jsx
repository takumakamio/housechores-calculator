import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'You' ? classes.your : classes.ones}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">合計家事時間: {total / 60} 時間</Typography>
        <Typography variant="h5">時給換算(1150円/h): {total} 円</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
