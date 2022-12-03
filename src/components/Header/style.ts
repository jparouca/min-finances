import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['brown-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin: 0 auto;
  padding: 0 2rem;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0.5rem;
  background-image: linear-gradient(to right, #ff008e, #ffcd1e);
  
  border: 1px solid white;
  border-radius: 2px;
  
  font-weight: bold;
  color: ${props => props.theme.white};
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #b30038, #d9b700);
  }
`;