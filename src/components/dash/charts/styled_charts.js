import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
h3{
   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 28px;
   line-height: 33px;

   color: #2B2B2B;
}
h2{
   font-family: Mulish;
   margin-left: 17px;
   font-weight: bold;
   font-size: 28px;
   line-height: 33px;

   color: #2B2B2B;
}
`;

export const BarWrapper = styled.div`
width: 328px;
height: 365px;

background: #FFFFFF;

border: 1px solid #DAE6FF;
box-sizing: border-box;
border-radius: 12px;
display:flex;
flex-direction: column;
align-items: center;

margin-left: 17px;
margin-right: 15px;
margin-bottom: 24px;
`;

export const RowContainer = styled.div`
width: calc(100vw - 246px);
height: auto;
display: flex;
flex-direction: row;
`;

export const NpsGrupos = styled.div`
width: calc(100vw - 246px);
display: flex;
flex-direction: column;
h3 {
   margin-left: 17px;
}
`;

export const DonutCard = styled.div`
width: 328px;
height: 430px;
background: #FFFFFF;

border: 1px solid #DAE6FF;
box-sizing: border-box;
border-radius: 12px;
display:flex;
flex-direction: column;
align-items: center;

margin-left: 17px;
margin-right: 15px;
margin-bottom: 24px;
`;

export const DadosGrupos = styled.div`
width: calc(100vw - 246px);
display: flex;
flex-direction: column;
h3 {
   margin-left: 17px;
}
`;