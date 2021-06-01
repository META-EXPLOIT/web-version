import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChartCR = () => {
   return <>
         <Doughnut 
            data={{
            labels:['Branco', 'Parda', 'Preta', 'Amarela', 'Indigena'],
            datasets: [
               {
               label: 'quantidade',
               data: [25,20,10,5,2],
               backgroundColor: [
                  '#F05C5C',
                  '#F178B6',
                  '#7879F1',
                  '#FFD78F',
                  '#6196FF'
               ]
               }
            ]
            }}
         />
   </>
}

export default DonutChartCR;