import React from 'react';
import { Bar }  from 'react-chartjs-2'

const BarChartPCD = ({dados}) => {
   return <>
      <Bar
         data={{
            labels:['Visual', 'Física', 'Auditiva', 'Intelectual', 'Psicossocial','Reabilitado','Não se aplica'],
            datasets:[
               {
                  label:'quantidade',
                  data: [1,2,0,0,0],
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

export default BarChartPCD;