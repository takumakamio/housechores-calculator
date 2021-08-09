import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from '../Form/Form';
import List from '../List/List';
import { HousechoresCalculatorContext } from '../../context/context';

import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(HousechoresCalculatorContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography variant="h5">Total Balance ${balance}</Typography>
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
