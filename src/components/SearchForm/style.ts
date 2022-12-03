import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["brown-1000"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }
  button {
    background: transparent;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    
    border: 2px solid;
    border-radius: 4px;
    font-weight: bold;
    color: ${props => props.theme.white};
    cursor: pointer;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &:hover {
      background-image: linear-gradient(to right, #b30038, #d9b700);
    }
  }
`