import {createContext, ReactNode, useEffect, useState} from "react";
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  tag: string;
  createdAt: string;
}
interface TransactionProviderProps {
  children: ReactNode;
}
interface CreateTransactionInput {
  description: string;
  price: number;
  tag: string;
  type: 'income' | 'outcome';
}
interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      }
    });

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, tag, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      tag,
      type,
      createdAt: new Date(),
    });

    setTransactions(state => [response.data, ...state])
  }


  useEffect(() => {
    fetchTransactions()
  }, []);
  return (
    <TransactionContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  )
}