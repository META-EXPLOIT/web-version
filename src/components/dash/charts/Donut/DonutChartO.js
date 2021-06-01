import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChartO = () => {
   return <>
         <Doughnut 
            data={{
            labels:['Hétero', 'Homo', 'Bi', 'Pan', 'Assexual'],
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

export default DonutChartO;