import styled from 'styled-components';

export const StyledHeader = styled.div`
width: auto;
height: 100px;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
display: flex;
padding-left: 140px;
padding-right: 110px;
align-items: center;
justify-content: space-between;

background: #1362FF;

.buttondiv {
   display: flex;
   flex-direction: row;
   align-items: center;
}
`;

export const FlatButton = styled.button`
background-color: Transparent;
   background-repeat:no-repeat;
   border: none;
   cursor: pointer;
   overflow: hidden;
   outline:none;

   width: 85px;
   height: 24px;  

   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   color: #F8F8F8;
`;

export const UserButton = styled.div`
background: #DAE6FF;
border-radius: 30px;
width: 170px;
height: 60px;

display: flex;
align-items: center;
justify-content: space-evenly;

font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;

color: #434343;
`;

