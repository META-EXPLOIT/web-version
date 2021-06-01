import styled from 'styled-components'

export const StyledDiv = styled.div`
height: 673px;
width: auto;
background: linear-gradient(0deg, #FFFFFF 50%, #1362FF 50%);
`;

export const StyledTitle = styled.h2`
font-family: Mulish;
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 50px;

color: #F8F8F8;
padding-top: 48px;
margin-bottom: 88px;
text-align: center;
.t2 {
   margin-bottom: 44px;
}
`;

export const CardsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const StyledCard = styled.div`
width: 270px;
height: 309px;
background: #F8F8F8;
box-shadow: 0px 8px 20px rgba(19, 98, 255, 0.15);
border-radius: 20px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: 15px;
margin-left: 15px;

.sub{
   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;
   margin-top: 50px;
   text-align: center;
   color: #353535;
}

`;

export const CardIcon = styled.img`
width: 120px;
height: 120px;
margin-top: 30px;
`;