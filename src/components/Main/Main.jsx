import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from '../Form/Form';
import List from '../List/List';
import { HousechoresCalculatorContext } from '../../context/context';

import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(HousechoresCalculatorContext);
  const hours = Math.floor(balance / 6) / 10;

  return (
    <Card className={classes.root}>
      <CardHeader title="家事計算機" className={classes.title} />
      <CardContent>
        <Typography variant="h5" className={classes.subtitle}>
          バランス: {hours} 時間 ({balance} 分)
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
