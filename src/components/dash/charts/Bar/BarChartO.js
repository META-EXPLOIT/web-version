import React from 'react';
import { Bar }  from 'react-chartjs-2'

const BarChartO = ({dados}) => {
   return <>
      <Bar
         data={{
            labels:['Hétero', 'Homo', 'Bi', 'Pan', 'Assexual'],
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

export default BarChartO;