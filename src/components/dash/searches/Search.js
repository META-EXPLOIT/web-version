import React, {   useState } from 'react'
import { StyledButton, Wrapper } from './styled_search';
import SearchTable from './SearchTable.js';
import Dash from '../dashboard/Dash';

export default function Search () {
   const [ showModal, setShowModal ] = useState(false);
   const [ isNPS, setIsNPS ] = useState(false);


   const openModal = () => {
      setShowModal(prev => !prev);
   };

   console.log(isNPS);

   function handleClick() {
      if (isNPS === false) {
         openModal();
      } else {
         alert("Pesquisa de NPS enviada com sucesso");
      }
   }

   return (
      <Wrapper>
            <h2>Pesquisas</h2>
         <div>
            <SearchTable setIsNPS={setIsNPS}/>
            <StyledButton onClick={handleClick}>Enviar</StyledButton>
            <Dash showModal={showModal} setShowModal={setShowModal}/>
         </div>
      </Wrapper>
   )
}