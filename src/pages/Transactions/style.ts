import styled from "styled-components";

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}
export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2rem;
  
`;

export const TransactionTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  
  border-spacing: 0 0.5rem;
  border-collapse: separate;
  
  td {
    padding: 1.2rem 2rem;
    
    background: ${props => props.theme['brown-700']};
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
`;