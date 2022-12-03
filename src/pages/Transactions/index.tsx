import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighlight, TransactionContainer, TransactionTable} from "./style";
import {SearchForm} from "../../components/SearchForm";

export function Transactions() {
  return (
    <div>
        <Header />
        <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
          <tr>
            <td width="40%">Weekly Sales</td>
            <td>
              <PriceHighlight variant={"income"}> $350.00</PriceHighlight>
            </td>
            <td>sales</td>
            <td>09/30/2021</td>
          </tr>
          <tr>
            <td width="40%">Amazon Prime</td>
            <td>
              <PriceHighlight variant={"outcome"}>-$5.00</PriceHighlight>
            </td>
            <td>subscription</td>
            <td>10/01/2021</td>
          </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}