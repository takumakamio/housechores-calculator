const yourColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const onesColors = [
  '#b50d12',
  '#bf2f1f',
  '#c9452c',
  '#d3583a',
  '#dc6a48',
  '#e57c58',
  '#ee8d68',
  '#f79d79',
  '#ffae8a',
  '#cc474b',
  '#f55b5f',
];

export const yourCategories = [
  { type: '料理', amount: 0, color: yourColors[0] },
  { type: '皿洗い', amount: 0, color: yourColors[1] },
  { type: '洗濯', amount: 0, color: yourColors[2] },
  { type: '掃除', amount: 0, color: yourColors[3] },
  { type: '片付け', amount: 0, color: yourColors[4] },
  { type: '買い物', amount: 0, color: yourColors[5] },
  { type: '育児', amount: 0, color: yourColors[5] },
  { type: '家計管理', amount: 0, color: yourColors[7] },
  { type: 'その他', amount: 0, color: yourColors[8] },
];

export const onesCategories = [
  { type: '料理', amount: 0, color: onesColors[0] },
  { type: '皿洗い', amount: 0, color: onesColors[1] },
  { type: '洗濯', amount: 0, color: onesColors[2] },
  { type: '掃除', amount: 0, color: onesColors[3] },
  { type: '片付け', amount: 0, color: onesColors[4] },
  { type: '買い物', amount: 0, color: onesColors[5] },
  { type: '育児', amount: 0, color: onesColors[5] },
  { type: '家計管理', amount: 0, color: onesColors[7] },
  { type: 'その他', amount: 0, color: onesColors[8] },
];

export const resetCategories = () => {
  yourCategories.forEach((c) => (c.amount = 0));
  onesCategories.forEach((c) => (c.amount = 0));
};
