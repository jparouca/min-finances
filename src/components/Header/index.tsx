import {HeaderContainer, HeaderContent, NewTransactionButton} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import {NewTransactionModal} from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>Taka | Finances</span>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
)}