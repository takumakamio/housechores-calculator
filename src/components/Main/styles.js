import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },

  divider: {
    margin: '20px 0',
  },
}));
