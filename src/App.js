import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={11} sm={3} className={classes.mobile} >
          <Details title="Player1" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.desktop}>
          <Details title="Player1" />
        </Grid>
        <Grid item xs={11} sm={3} className={classes.last}>
          <Details title="Player2" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
