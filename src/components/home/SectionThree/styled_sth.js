import styled from 'styled-components';

export const StyledDiv = styled.div`
width: auto;
height: auto;
`;

export const ImgCard = styled.div`
width: 650px;
height: 572px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;

background: ${props => props.primary ? "#DAE6FF" : "#DFDAFF"} ;
`;

export const StyledImg = styled.img`
width: 90%;
height: 90%;
`;

export const RowContainer = styled.div`
display: flex;
flex-direction: ${props => props.primary ? "row" : "row-reverse"};
justify-content: center;
margin-top: 50px;
margin-bottom: 115px;
`;

export const TextCard = styled.div`
width: 553px;
height: 475px;
background: #F8F8F8;
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
border-radius: 20px;
margin-top: 60px;

margin-left: ${props => props.primary ? "-30px" : "0px"};
margin-right: ${props => props.primary? "0px" : "-30px"};
`;

export const StyledTitle = styled.h2`
font-family: Mulish;
font-style: normal;
font-weight: bold;
color: #353535;

font-size: ${props => props.primary ? "40px" : "32px"};
line-height: ${props => props.primary ? "48px" : "40px"};   
`;

export const CardContent = styled.p`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;

margin-left: 45px;
margin-right: 45px;

text-align: left;

color: #353535;
`;