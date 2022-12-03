import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  
  input {
    background: ${props => props.theme['brown-900']};
    flex: 1;
    padding: 1rem;
    
    border-radius: 6px;
    border: 0;
    
    color: ${props => props.theme['gray-300']};
    
    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
    
    button {
      background: transparent;
      display: flex;
      align-content: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 1px solid white;
      border-radius: 6px;
      
      color: white;
      font-weight: bold;
      
      &:hover {
        border-color: white;
        color: ${props => props.theme.white};
        transition: background-color 0.2s, color 0.2s;
    }
  }
`;