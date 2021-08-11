// チャート用データのカスタムフック
import { useContext } from 'react';
import { HousechoresCalculatorContext } from './context/context';

import { Player1Categories, Player2Categories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(HousechoresCalculatorContext);
  const rightTransactions = transactions.filter((t) => t.type === title); //タイトル名とタイプが一致してればデータに加える
  const total = rightTransactions.reduce((acc, currVal) => (acc += currVal.amount), 0);
  const categories = title === 'Player1' ? Player1Categories : Player2Categories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  // グラフ描画
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
