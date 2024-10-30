import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';
import { Transaction } from '../types';

const mockData: Transaction[] = [
  { id: '1', name: 'Groceries', amount: 50, date: '2024-10-01' },
  { id: '2', name: 'Rent', amount: 700, date: '2024-10-01' },
  { id: '3', name: 'Coffee', amount: 5, date: '2024-10-02' },
];

type Props = NativeStackScreenProps<TransactionsStackParamList, 'TransactionsList'>;

const TransactionsListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <FlatList
      data={mockData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
          <View>
            <Text>{item.name}</Text>
            <Text>${item.amount}</Text>
            <Text>{item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TransactionsListScreen;
