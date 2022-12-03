import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 100vw;
  inset: 0;
  position: fixed;
`;

export const Content = styled(Dialog.Content)`
  background: ${props => props.theme["brown-900"]};
  min-width: 32rem;
  border-radius: 6px;
  border: 0.5px solid white;
  padding: 2.5rem 3rem;
  position: fixed;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      background: ${props => props.theme["brown-900"]};
      color: ${props => props.theme["gray-300"]};
      border-radius: 6px;
      border: 0;
      padding: 1rem;
      
      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }
    button[type="submit"] {
      background-image: linear-gradient(to right, #ff008e, #ffcd1e);
      color: ${props => props.theme.white};
      font-weight: bold;
      height: 50px;
      border: 0.5px solid white;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      
      &:hover {
        background-image: linear-gradient(to right, #b30038, #d9b700);
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  
  color: ${props => props.theme["gray-500"]};
  position: absolute;
  border: 0;
  line-height: 0;
  cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
  
`;

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme["brown-700"]};
  gap: 0.5rem;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme["gray-300"]};
  
  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
  }
  
  &[data-sate='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
  
    svg {
      color: ${props => props.theme.white};
    }
  }
`;