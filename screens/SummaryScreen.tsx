import React from 'react';
import { View, Text } from 'react-native';

type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

const mockData: Transaction[] = [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-10-01' },
  { id: '2', name: 'Rent', amount: 700, date: '2024-10-01' },
  { id: '3', name: 'Coffee', amount: 5, date: '2024-10-02' },
];

const SummaryScreen: React.FC = () => {
  const totalExpenses = mockData.reduce((sum: number, transaction: Transaction) => sum + transaction.amount, 0);

  return (
    <View>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

export default SummaryScreen;
