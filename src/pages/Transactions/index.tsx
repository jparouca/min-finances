import {useContext} from "react";
import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighlight, TransactionContainer, TransactionTable} from "./style";
import {SearchForm} from "../../components/SearchForm";
import {TransactionContext} from "../../contexts/TransactionContext";
import {dateFormatter, priceFormatter} from "../../utils/formatter";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  tag: string;
  createdAt: string;
}
export function Transactions() {
  const {transactions} = useContext(TransactionContext)
  return (
    <div>
        <Header />
        <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.tag}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}