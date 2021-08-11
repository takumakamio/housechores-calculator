import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core';
import { Delete, Accessibility } from '@material-ui/icons';

import { HousechoresCalculatorContext } from '../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(HousechoresCalculatorContext);

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((t) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={t.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={t.type === 'your' ? classes.avatarYour : classes.avatarOnes}>
                <Accessibility />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={t.category} secondary={`${t.amount}分 - ${t.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(t.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};
export default List;
