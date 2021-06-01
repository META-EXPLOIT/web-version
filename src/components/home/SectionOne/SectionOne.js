import React from 'react'
import { StyledDiv, StyledTitle, StyledSubtitle, StyledButton, StyledContent, ContentImg, CardIcon, CardContainer, StyledCard } from './styled_so';
import image from '../../../assets/images/amico.svg';
import nps_icon from '../../../assets/icons/nps.svg';
import plus_icon from '../../../assets/icons/plus.svg';
import smile_icon from '../../../assets/icons/smile.svg';


export default function SectionOne(){
   return(
      <StyledDiv>
         <StyledContent>
            <StyledTitle className='text'>Diversight <br/>sua empresa mais diversa</StyledTitle>
            <StyledSubtitle className='text'>Torne sua empresa mais diversa através de diagnósticos precisos e dados acionáveis. </StyledSubtitle>
            <StyledButton>Conhecer a plataforma</StyledButton>
         </StyledContent>
         <ContentImg src={image}/>
         <CardContainer>
            <StyledCard>
               <CardIcon src={plus_icon}/>
               <p className='sub'>Contrate diversidade</p>
            </StyledCard>
            <StyledCard>
               <CardIcon src={smile_icon}/>
               <p className='sub'>Mantenha diversidade</p>
            </StyledCard>
            <StyledCard>
               <CardIcon src={nps_icon}/>
               <p className='sub'>Calcule<br/>diversidade</p>
            </StyledCard>
         </CardContainer>
      </StyledDiv>
   );
}