import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #f2f2f2;
border-radius: 5px;
padding: 5px;
width: 30%;

@media (max-width: 750px) {
    width: 20%;
    p {
        font-size: 12px;
    }

    span {
        font-size: 20px;
    }

    svg {
        display: none;
    } } 
`;  


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-top: -10px;
  `;


