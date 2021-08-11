import React, { useState, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { HousechoresCalculatorContext } from '../../context/context';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../utils/formatDate';

import useStyles from './styles';
import { Player1Categories, Player2Categories } from '../../constants/categories';
import CustomizedSnackbar from '../Snackbar/Snackbar';
const initialState = {
  amount: '30',
  category: '料理',
  type: 'Player1',
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(HousechoresCalculatorContext);
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories = formData.type === 'You' ? Player1Categories : Player2Categories;

  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      {/* プレイヤー */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Who?</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Player1">Player1</MenuItem>
            <MenuItem value="Player2">Player2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* カテゴリー */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>カテゴリー</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* 時間 */}
      <Grid item xs={6}>
        <TextField
          type="number"
          label="時間(分)"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      {/* 日付 */}
      <Grid item xs={6}>
        <TextField
          type="date"
          label="日付"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        />
      </Grid>

      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
        作成する
      </Button>
    </Grid>
  );
};

export default Form;
