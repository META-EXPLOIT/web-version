import React, {   useState } from 'react'
import { StyledButton, Wrapper } from './styled_search';
import SearchTable from './SearchTable.js';
import Dash from '../dashboard/Dash';

export default function Search () {
   const [ showModal, setShowModal ] = useState(false);
   const [ isNPS, setIsNPS ] = useState(1);


   const openModal = () => {
      setShowModal(prev => !prev);
   };

   console.log(isNPS);

   function handleClick() {
      if (isNPS === 0) {
         alert("Pesquisa de NPS enviada com sucesso");
      } else if (isNPS === 1){
         openModal();
      } else if (isNPS === 2) {
         openModal();
      }
   }

   return (
      <Wrapper>
            <h2>Pesquisas</h2>
         <div>
            <SearchTable setIsNPS={setIsNPS}/>
            <StyledButton onClick={handleClick}>Enviar</StyledButton>
            <Dash isNPS={isNPS} showModal={showModal} setShowModal={setShowModal}/>
         </div>
      </Wrapper>
   )
}