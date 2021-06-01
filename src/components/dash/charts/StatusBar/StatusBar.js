import React from 'react';

export default function StatusBar (props) {
   const { bgColor, fillerColor, completed } = props;
   
   const containerStyles = {
      height: 20,
      width: 327,
      backgroundColor: bgColor,
      borderRadius: 50,
      marginBottom: 24
   }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: fillerColor,
      borderRadius: 'inherit',
      textAlign: 'right',
      display: 'flex',
      alignItems: 'center',
   }
  
   const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
   }
  
   return (
      <>
         <div style={containerStyles}>
            <div style={fillerStyles}>
               <span style={labelStyles}>{`${completed}%`}</span>
            </div>
         </div>
      </>
   )
}