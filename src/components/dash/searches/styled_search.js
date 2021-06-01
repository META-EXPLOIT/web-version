import styled from 'styled-components';

export const Wrapper = styled.div`
padding-left: 30px;
background: #F7F8FC;
z-index: 10;
text-align: left;
display: flex;
flex-direction: column;

div {
   display: flex;
flex-direction: column;
}

.h2 {
   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 28px;
   line-height: 33px;
   margin-left: 30px;
   color: #2B2B2B;
}
`;

export const StyledButton = styled.button`
width: 107px;
height: 32px;

background: #1362FF;

box-shadow: 0px 10px 35px rgba(19, 98, 255, 0.15);
border-radius: 9px;

font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
cursor: pointer;
color: #F7F7F7;
outline: none;
overflow: hidden;
border: none;
cursor: pointer;
`;