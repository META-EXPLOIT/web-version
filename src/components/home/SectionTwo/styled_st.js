import styled from 'styled-components';

export const StyledDiv = styled.div`
height: 850px;
width: auto;
background: #FFFFFF;
display: flex;
flex-direction: row;
justify-content: center;
`;

export const StyledCardImg = styled.div`
width: 491px;
height: 570px;
background: #1362FF;

margin-top: 144px;
display: flex;
align-items: center;
justify-content: center;

box-shadow: 0px 10px 35px rgba(19, 98, 255, 0.15);
border-radius: 15px;
`;

export const StyledImage = styled.img`
   width: 90%;
   height: 90%;
`;

export const StyledCard = styled.div`
width: 400px;
height: 464px;
margin-top: 196px;

background: #F8F8F8;
border-radius: 0px 12px 12px 12px;
h2 {
   margin-left: 30px;
   font-size: 32px;
   line-height: 40px;
}
.btn {
   margin-top: 50px;
   margin-left: 40px;
}
`;

export const CardContent = styled.p`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 32px;

margin-left: 30px;
margin-right: 30px;

text-align: left;

color: #353535;
`;