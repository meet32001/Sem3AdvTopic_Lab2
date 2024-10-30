// TransactionsStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import { Transaction } from '../types';

export type TransactionsStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

const Stack = createStackNavigator<TransactionsStackParamList>();

const TransactionsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
