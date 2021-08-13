const Player1Colors = [
  '#123123',
  '#154731',
  '#165f40',
  '#16784f',
  '#14915f',
  '#10ac6e',
  '#0bc77e',
  '#04e38d',
  '#00ff9d',
];
const Player2Colors = [
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

export const Player1Categories = [
  { type: '料理', amount: 0, color: Player1Colors[0] },
  { type: '皿洗い', amount: 0, color: Player1Colors[1] },
  { type: '洗濯', amount: 0, color: Player1Colors[2] },
  { type: '掃除', amount: 0, color: Player1Colors[3] },
  { type: '片付け', amount: 0, color: Player1Colors[4] },
  { type: '買い物', amount: 0, color: Player1Colors[5] },
  { type: '育児', amount: 0, color: Player1Colors[6] },
  { type: '家計管理', amount: 0, color: Player1Colors[7] },
  { type: 'その他', amount: 0, color: Player1Colors[8] },
];

export const Player2Categories = [
  { type: '料理', amount: 0, color: Player2Colors[0] },
  { type: '皿洗い', amount: 0, color: Player2Colors[1] },
  { type: '洗濯', amount: 0, color: Player2Colors[2] },
  { type: '掃除', amount: 0, color: Player2Colors[3] },
  { type: '片付け', amount: 0, color: Player2Colors[4] },
  { type: '買い物', amount: 0, color: Player2Colors[5] },
  { type: '育児', amount: 0, color: Player2Colors[6] },
  { type: '家計管理', amount: 0, color: Player2Colors[7] },
  { type: 'その他', amount: 0, color: Player2Colors[8] },
];

export const resetCategories = () => {
  Player1Categories.forEach((c) => (c.amount = 0));
  Player2Categories.forEach((c) => (c.amount = 0));
};
