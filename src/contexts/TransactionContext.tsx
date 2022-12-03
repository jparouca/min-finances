import {createContext, ReactNode, useEffect, useState} from "react";
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
interface TransactionContextType {
  transactions: Transaction[];
}
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, []);
  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}