import styled from 'styled-components';

export const StyledDiv = styled.div`
   background: linear-gradient(247.11deg, rgba(244, 247, 255, 0.8) -5.08%, rgba(232, 240, 254, 0.8) 103.98%);
   backdrop-filter: blur(100px);
   width: auto;
   height: 700px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   position: relative;
   padding-left: 125px;

   &:after{
      content: "";
      
   }
`;

export const StyledTitle = styled.h1`
   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 40px;
   line-height: 48px;
   white-space: pre-line;
   color: #353535;
   margin-bottom: 14px;
`;

export const StyledSubtitle = styled.p`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
margin: 0;

color: #353535;
`;

export const StyledButton = styled.button`
background: #1362FF;
box-shadow: 0px 10px 35px rgba(19, 98, 255, 0.15);
border-radius: 12px;
outline: none;
overflow: hidden;
border:none;
cursor:pointer;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
width: 312px;
margin-top:100px;

font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

color: #F7F7F7;
`;

export const StyledContent = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
text-align: left;
width: 362px;
padding-top: 120px;
`;

export const ContentImg = styled.img`
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;
`;

export const CardIcon = styled.img`
width: 65px;
height: 65px;
margin-top: 30px;
`;

export const StyledCard = styled.div`
width: 187px;
height: 187px;
display: flex;
flex-direction: column;
margin-bottom: 24px;
align-items: center;
justify-content: center;

background: #1362FF;
border-radius: 20px;

.sub {
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 32px;

color: #F8F8F8;
}
`;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
margin-top: 30px;
`;