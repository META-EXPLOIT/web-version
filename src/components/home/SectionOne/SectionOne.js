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
            <StyledSubtitle className='text'>Analise diárias sobre o humor e sentimentos de seus colaboradores, torne sua empresa mais diversa e produtiva.</StyledSubtitle>
            <StyledButton>Cadastrar-se</StyledButton>
         </StyledContent>
         <ContentImg src={image}/>
         <CardContainer>
            <StyledCard>
               <CardIcon src={nps_icon}/>
               <p className='sub'>Análise NPS</p>
            </StyledCard>
            <StyledCard>
               <CardIcon src={smile_icon}/>
               <p className='sub'>Humor Diário</p>
            </StyledCard>
            <StyledCard>
               <CardIcon src={plus_icon}/>
               <p className='sub'>Admissional</p>
            </StyledCard>
         </CardContainer>
      </StyledDiv>
   );
}