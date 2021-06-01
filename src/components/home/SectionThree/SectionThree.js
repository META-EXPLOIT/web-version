import React from 'react'  
import { StyledTitle, StyledDiv, RowContainer, ImgCard, StyledImg, TextCard, CardContent, LastCard, EditedCard } from './styled_sth'
import note1 from '../../../assets/images/note1.png';
import note2 from '../../../assets/images/note2.png';
import phone1 from '../../../assets/images/phone1.png';
import desktop from '../../../assets/images/desktop.png';

export default function SectionThree () {
   return (
      <>
         <StyledDiv>
            <StyledTitle primary >Como funciona nossa solução?</StyledTitle>
            <RowContainer primary>
               <ImgCard>
                  <StyledImg src={note1}/>
               </ImgCard>
               <TextCard primary>
                  <CardContent>
                  1. A empresa se cadastra em nossa plataforma web e divulga nosso aplicativo mobile para seus funcionários.
                  </CardContent>
               </TextCard>
            </RowContainer>
            <RowContainer>
               <ImgCard>
                  <StyledImg src={phone1}/>
               </ImgCard>
               <EditedCard>
                  <CardContent>
                     2. Os colaboradores acessam o aplicativo de forma gratuita e respondem nossas pesquisas sempre que for necessário.
                  </CardContent>
               </EditedCard>
            </RowContainer>
            <RowContainer primary>
            <ImgCard primary>
                  <StyledImg src={note2}/>
               </ImgCard>
               <EditedCard primary >
                  <CardContent>
                  3. O Diversight transforma todas essas respostas em dashboards com dados acionáveis e compartilha com a empresa toda essa informação. 
                  </CardContent>
               </EditedCard>
            </RowContainer>
            <RowContainer>
               <ImgCard>
                  <StyledImg src={desktop}/>
               </ImgCard>
               <LastCard>
                  <CardContent>
                  4. Essa estratégia ajuda o RH a tornar a Organização um local mais agradável e colaborativo para todos os funcionários, principalmente para aqueles que pertencem a um grupo de pessoas sub-representadas.
                  </CardContent>
               </LastCard>
            </RowContainer>
         </StyledDiv>
      </>
   );
}