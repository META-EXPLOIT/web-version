import React from 'react'  
import { StyledTitle, StyledDiv, RowContainer, ImgCard, StyledImg, TextCard, CardContent } from './styled_sth'
import image_a from '../../../assets/images/designer_girl.svg';
import image_b from '../../../assets/images/city_girl.svg';

export default function SectionThree () {
   return (
      <>
         <StyledDiv>
            <StyledTitle primary>Conheça mais sobre a sua empresa</StyledTitle>
            <RowContainer primary>
               <ImgCard primary>
                  <StyledImg src={image_a}></StyledImg>
               </ImgCard>
               <TextCard primary>
                  <StyledTitle>Análise PCD</StyledTitle>
                  <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.
                  </CardContent>
               </TextCard>
            </RowContainer>
            <RowContainer>
            <ImgCard>
                  <StyledImg src={image_b}></StyledImg>
               </ImgCard>
               <TextCard>
                  <StyledTitle>Diversidade<br/>na liderança</StyledTitle>
                  <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum congue tincidunt mi quis non quam dictumst. Facilisis diam orci, morbi parturient lobortis magna iaculis. Scelerisque quis urna, justo, suscipit. Et feugiat et aliquam ut id in augue.
                  </CardContent>
               </TextCard>
            </RowContainer>
         </StyledDiv>
      </>
   );
}