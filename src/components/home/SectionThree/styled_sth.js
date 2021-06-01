import styled from 'styled-components';

export const StyledDiv = styled.div`
width: auto;
height: auto;
`;

export const ImgCard = styled.div`
width: 730px;
height: 650px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;

`;

export const StyledImg = styled.img`
width: 100%;
height: 100%;
`;

export const RowContainer = styled.div`
display: flex;
flex-direction: ${props => props.primary ? "row" : "row-reverse"};
justify-content: center;
margin-top: 50px;
margin-bottom: 115px;
`;

export const TextCard = styled.div`
width: 494px;
height: 245px;
background: #F8F8F8;
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
border-radius: 20px;
margin-top: 60px;

margin-left: ${props => props.primary ? "-55px" : "0px"};
margin-right: ${props => props.primary? "0px" : "-30px"};
margin-top: ${props => props.primary? "60px" : "290px"};
text-align: ${props => props.primary? "center" : "left"};
`;

export const EditedCard = styled(TextCard)`
   height: 290px;
`;

export const LastCard = styled.div`
width: 553px;
height: 380px;
background: #F8F8F8;
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
border-radius: 20px;
margin-top: 60px;
margin-left: 0;
margin-right: -30px;
margin-top: 200px;

`;

export const StyledTitle = styled.h2`
font-family: Mulish;
font-style: normal;
font-weight: bold;
color: #353535;
text-align: center;

font-size: ${props => props.primary ? "40px" : "32px"};
line-height: ${props => props.primary ? "48px" : "40px"};   
`;

export const CardContent = styled.p`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 40px;

margin-left: 45px;
margin-right: 45px;

text-align: left;

color: #353535;
`;