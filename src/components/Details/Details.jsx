import React from 'react';
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import { PolarArea } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  const hours = Math.floor(total / 6) / 10;
  const salary = (hours * 1150).toLocaleString();

  return (
    <Card className={title === 'Player1' ? classes.Player1 : classes.Player2}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">
          合計時間: {hours} 時間 ({total} 分)
        </Typography>
        <Typography variant="h5">推定収入: {salary}円 (1,150円 X 時間)</Typography>
        <Divider className={classes.divider} />
        <PolarArea data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
