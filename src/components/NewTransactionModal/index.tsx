import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from "./style";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form>
          <input  type="text" placeholder="Description" required/>
          <input  type="number" placeholder="Price" required/>
          <input  type="text" placeholder="Tag" required />

          <TransactionType>
            <TransactionTypeButton value="income" variant={"income"}><ArrowCircleUp size={24}/>Income</TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant={"outcome"}><ArrowCircleDown size={24}/>Outcome</TransactionTypeButton>
          </TransactionType>
          <button type="submit">Create</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}