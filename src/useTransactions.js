// チャート用データのカスタムフック
import { useContext } from 'react';
import { HousechoresCalculatorContext } from './context/context';
import { yourCategories, onesCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(HousechoresCalculatorContext);
  const rightTransactions = transactions.filter((t) => t.type === title); //タイトル名とタイプが一致してればデータに加える
  const total = rightTransactions.reduce((acc, currVal) => (acc += currVal.amount), 0);
  const categories = title === 'You' ? yourCategories : onesCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
