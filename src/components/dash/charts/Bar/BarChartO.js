import React from 'react';
import { Bar }  from 'react-chartjs-2'

const BarChartO = () => {
   return <>
      <Bar
         data={{
            labels:['Hétero', 'Homo', 'Bi', 'Pan', 'Assexual'],
            datasets:[
               {
                  label:'quantidade',
                  data:[35,25,25,20,10],
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