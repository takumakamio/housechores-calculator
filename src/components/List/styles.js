import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarYour: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarOnes: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
