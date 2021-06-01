import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChartG = () => {
   return <>
         <Doughnut 
            data={{
            labels:['Hom.Cis', 'Mul.Cis', 'Mul.Trans', 'Hom.Trans', 'Agênero'],
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

export default DonutChartG;