import {HeaderContainer, HeaderContent, NewTransactionButton} from "./style";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <p>Teste</p>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
)}