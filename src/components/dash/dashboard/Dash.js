import React, { useState } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton, StyledButton } from './styled_dash.js';
import UsersTable from './table/UsersTable';


export const Dash = ({showModal, setShowModal}) => {
  const [ selecionado, setSelecionado ] = useState("");

   function handleClick() {
      alert("Pesquisa enviada para ", selecionado, " com sucesso");
   }


   return (
      <>
         { showModal ? (
            <Background>
               <ModalWrapper showModal={showModal}>
                  <ModalContent>
                     <UsersTable setSelecionado={setSelecionado}/>
                  </ModalContent>
                  <div className='buttons'>
                     <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)}>Cancelar</CloseModalButton>
                     <StyledButton onClick={handleClick}>Enviar Pesquisa</StyledButton>
                  </div>
               </ModalWrapper>
            </Background>
         ) : null}
      </>
   );
};

export default Dash;