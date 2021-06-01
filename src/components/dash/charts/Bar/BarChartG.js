import React from 'react';
import { Bar }  from 'react-chartjs-2'

const BarChartG = ({dados}) => {
   return <>
      <Bar
         data={{
            labels:['Hom.Cis', 'Mul.Cis', 'Mul.Trans', 'Hom.Trans', 'Agênero'],
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

export default BarChartG;