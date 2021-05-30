import React from 'react'
import { StyledButton } from './styled_search';
import SearchTable from './SearchTable.js';

export default function Search () {
   return (
      <>
            <div>
               <h2>Pesquisas</h2>
               <SearchTable/>
               <StyledButton>Enviar</StyledButton>
            </div>
      </>
   )
}