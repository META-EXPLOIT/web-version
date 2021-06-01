import React, {useEffect, useState} from 'react';
import BarChartCR from './Bar/BarChartCR.js';
import BarChartG from './Bar/BarChartG.js';
import BarChartO from './Bar/BarChartO.js';
import BarChartPCD from './Bar/BarChartPCD.js';
import DonutChartCR from './Donut/DonutChartCR.js';
import DonutChartG from './Donut/DonutChartG.js';
import DonutChartO from './Donut/DonutChartO.js';
import DonutChartPCD from './Donut/DonutChartPCD.js';
import StatusBar from './StatusBar/StatusBar.js';
import api from '../../../services/api.js';

import { BarWrapper, RowContainer, NpsGrupos, DadosGrupos, DonutCard, Wrapper, StatusCard } from './styled_charts';


export default function Charts  () {
   const [ data, setData ] = useState([]);

   useEffect(() => {
      api({
          method: 'get',
          url: '/dashboard',
       }).then((res) => {
          setData(res.data); // data = res.data
          console.log(data);
        })
       .catch((error) => console.log(error)
       )
    },[]) 


   return (
      <Wrapper>
         <h2>Dashboard</h2>
         <StatusCard>
            <div className="barras">
            <h4>Nota geral da empresa</h4>
               <p>Promotores</p>
               <StatusBar bgColor="#D7FCD1" fillerColor="#1DD200" completed={30}/>
               <p>Neutros</p>
               <StatusBar bgColor="#FFF2DB" fillerColor="#FFBC42" completed={7}/>
               <p>Detratores</p>
               <StatusBar bgColor="#F6A2A2" fillerColor="#F05C5C" completed={17}/>
            </div>
            <div className='progresso'>
               <h4>NPS</h4>
               <h1>37</h1>
            </div>
         </StatusCard>
         <NpsGrupos>
            <h3>NPS por grupos</h3>
            <RowContainer>
               <BarWrapper>
                  <h3>NPS Cor e/ou Raça</h3>
                  <BarChartCR/>
               </BarWrapper>
               <BarWrapper>
               <h3>NPS Gênero</h3>
                  <BarChartG />
               </BarWrapper>
               <BarWrapper>
               <h3>NPS Orientação</h3>
                  <BarChartO />
               </BarWrapper>
            </RowContainer>
            <BarWrapper>
               <h3>NPS PCD</h3>
                  <BarChartPCD />
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