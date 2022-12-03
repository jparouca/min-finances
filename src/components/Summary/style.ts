import styled, {css} from "styled-components";

interface SummaryCardProps {
  variant?: 'green'
}
export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['brown-700']};
  border: 0.5px solid white;
  border-radius: 4px;
  padding: 2rem;
  
  header {
    display: flex;
    align-content: center;
    justify-content: space-between;
    
    color: ${props => props.theme['gray-300']};
  }
  
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
  
  ${props => props.variant === 'green' && css`
  background-color: ${props.theme['green-700']};
  
  `}
`;