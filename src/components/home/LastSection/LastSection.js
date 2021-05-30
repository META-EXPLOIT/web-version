import React from 'react';
import { CardsContainer, StyledCard, StyledDiv, StyledTitle, CardIcon } from './styled_ls.js';
import board1 from '../../../assets/icons/board1.svg';
import smile2 from '../../../assets/icons/smile2.svg';
import satisfacao3 from '../../../assets/icons/satisfacao3.svg';
import nps4 from '../../../assets/icons/nps4.svg';

export default function LastSection () {
   return(
      <>
         <StyledDiv>
            <StyledTitle>Outros dados que também analisamos:</StyledTitle>
            <CardsContainer>
               <StyledCard>
                  <CardIcon src={board1}/>
                  <p className="sub">Pesquisa admissional e demissional</p>
               </StyledCard>
               <StyledCard>
                  <CardIcon src={smile2}/>
                  <p className='sub'>Saiba o humor diário de seus funcionários</p>
               </StyledCard>
               <StyledCard>
                  <CardIcon src={satisfacao3} />
                  <p className='sub'>Satisfação semanal</p>
               </StyledCard>
               <StyledCard>
                  <CardIcon src={nps4} />
                  <p className='sub'>NPS trimestral</p>
               </StyledCard>
            </CardsContainer>
         </StyledDiv>
      </>
   )
}