import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';

type Props = NativeStackScreenProps<TransactionsStackParamList, 'TransactionDetail'>;

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetailScreen;
