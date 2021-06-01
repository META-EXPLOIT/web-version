import styled from 'styled-components'

export const Wrapper = styled.div`
width: calc(100vw - 250px);
height: 100%;
padding-top: 146px;
text-align: left;

&:after {
   content: "";
   background: #F7F8FC;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0; 
   left: 0;
   z-index: -1;
}
`;

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
div {
   display: flex;
}
`;