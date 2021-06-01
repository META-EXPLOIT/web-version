import React, {   useState } from 'react'
import { StyledButton, Wrapper } from './styled_search';
import SearchTable from './SearchTable.js';
import Dash from '../dashboard/Dash';

export default function Search () {
   const [ showModal, setShowModal ] = useState(false);

   const openModal = () => {
      setShowModal(prev => !prev);
   };


   return (
      <Wrapper>
            <h2>Pesquisas</h2>
         <div>
            <SearchTable/>
            <StyledButton onClick={openModal}>Enviar</StyledButton>
            <Dash showModal={showModal} setShowModal={setShowModal}/>
         </div>
      </Wrapper>
   )
}