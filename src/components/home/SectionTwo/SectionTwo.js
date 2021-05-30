import React from 'react'
import { StyledDiv, StyledCardImg, StyledImage, StyledCard, CardContent } from './styled_st.js';
import image from '../../../assets/images/free-love.svg';

export default function SectionTwo () {
   return (
      <>
         <StyledDiv>
            <StyledCardImg>
               <StyledImage src={image}/>
            </StyledCardImg>
            <StyledCard>
               <h2>O que é a diversight?</h2>
               <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis.</CardContent>
            </StyledCard>
         
         </StyledDiv>
      </>
   );
}