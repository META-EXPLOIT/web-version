import React from 'react'
import { StyledDiv, StyledCardImg, StyledImage, StyledCard, CardContent } from './styled_st.js';
import { StyledButton } from '../SectionOne/styled_so';
import image from '../../../assets/images/free-love.svg';

export default function SectionTwo () {
   return (
      <>
         <StyledDiv>
            <StyledCardImg>
               <StyledImage src={image}/>
            </StyledCardImg>
            <StyledCard>
               <h2>O que é a Diversight?</h2>
               <CardContent>A Diversight é uma ferramenta de diagnóstico de pluralidade de empresas. Através da nossa solução é possível extrair dados que auxiliem na criação e manutenção de um ambiente de trabalho mais agradável para colaboradores diversos.</CardContent>
               <StyledButton className='btn'>Entre em contato</StyledButton>
            </StyledCard>
         
         </StyledDiv>
      </>
   );
}