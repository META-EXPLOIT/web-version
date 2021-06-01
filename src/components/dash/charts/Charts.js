import React from 'react';
import BarChartCR from './Bar/BarChartCR.js';
import BarChartG from './Bar/BarChartG.js';
import BarChartO from './Bar/BarChartO.js';
import BarChartPCD from './Bar/BarChartPCD.js';
import DonutChartCR from './Donut/DonutChartCR.js';
import DonutChartG from './Donut/DonutChartG.js';
import DonutChartO from './Donut/DonutChartO.js';
import DonutChartPCD from './Donut/DonutChartPCD.js';

import { BarWrapper, RowContainer, NpsGrupos, DadosGrupos, DonutCard, Wrapper } from './styled_charts';

export default function Charts  () {
   return (
      <Wrapper>
         <h2>Dashboard</h2>
         <NpsGrupos>
            <h3>NPS por grupos</h3>
            <RowContainer>
               <BarWrapper>
                  <h3>NPS Cor e/ou Raça</h3>
                  <BarChartCR/>
               </BarWrapper>
               <BarWrapper>
               <h3>NPS Gênero</h3>
                  <BarChartG/>
               </BarWrapper>
               <BarWrapper>
               <h3>NPS Orientação</h3>
                  <BarChartO/>
               </BarWrapper>
            </RowContainer>
            <BarWrapper>
               <h3>NPS PCD</h3>
                  <BarChartPCD/>
            </BarWrapper>
         </NpsGrupos>
         <DadosGrupos>
            <h3>Dados dos colaboradores</h3>
            <RowContainer>
               <DonutCard>
                  <h3>Cor e/ou Raça</h3>
                  <DonutChartCR/>
               </DonutCard>
               <DonutCard>
                  <h3>Gênero</h3>
                  <DonutChartG/>
               </DonutCard>
               <DonutCard>
                  <h3>Orientação Sexual</h3>
                  <DonutChartO/>
               </DonutCard>
            </RowContainer>
               <DonutCard>
               <h3>PCD</h3>
                  <DonutChartPCD/>
               </DonutCard>
         </DadosGrupos>
      </Wrapper>
   )
}