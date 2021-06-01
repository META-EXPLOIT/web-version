import React from 'react';
import { Bar }  from 'react-chartjs-2'

const BarChartCR = ({dados}) => {

 //  console.log("--------Dados: ", dados);
   return <>
      <Bar
         data={{
            labels:['Branco', 'Parda', 'Preta', 'Amarela', 'Indigena'],
            datasets:[
               {
                  label:'quantidade',
                  data: dados,
                  backgroundColor: [
                     '#1DD200',
                     '#6196FF',
                     '#FFBC42',
                     '#AC42FF',
                     '#F05C5C'
                  ],
                  borderRadius: 15,
               },
            ]
         }}
         height={210}
         width={250}
         options={{
            maintainAspectRatio: true,
            scales: {
               xAxes: [{
                  gridLines: {
                     display: false
                  }
               }],
               yAxes: [{
                  gridLines: {
                     display: false
                  }
               }]
            }
         }}
      />
   </>
}

export default BarChartCR;