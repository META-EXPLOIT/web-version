import React from 'react';
import { CardsContainer, StyledCard, StyledDiv, StyledTitle, CardIcon } from '../LastSection/styled_ls';
import plus_a from '../../../assets/icons/plus_a.svg';
import smile_a from '../../../assets/icons/smile_a.svg';
import board_a from '../../../assets/icons/board_a.svg';

export default function LastSection () {
   return(
      <>
         <StyledDiv>
            <StyledTitle className='t2'>Os maiores desafios para as empresas quando falamos de<br/> quadro de funcionários diversos:</StyledTitle>
            <CardsContainer>
               <StyledCard>
                  <CardIcon src={plus_a}/>
                  <p className="sub">Contratar</p>
               </StyledCard>
               <StyledCard>
                  <CardIcon src={smile_a}/>
                  <p className='sub'>Manter</p>
               </StyledCard>
               <StyledCard>
                  <CardIcon src={board_a} />
                  <p className='sub'>Diagnosticar</p>
               </StyledCard>
            </CardsContainer>
         </StyledDiv>
      </>
   )
}