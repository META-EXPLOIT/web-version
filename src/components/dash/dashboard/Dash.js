import React from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton, StyledButton } from './styled_dash.js';
import UsersTable from './table/UsersTable';


export const Dash = ({showModal, setShowModal}) => {
   return (
      <>
         { showModal ? (
            <Background>
               <ModalWrapper showModal={showModal}>
                  <ModalContent>
                     <UsersTable/>
                  </ModalContent>
                  <div className='buttons'>
                     <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)}>Cancelar</CloseModalButton>
                     <StyledButton>Enviar Pesquisa</StyledButton>
                  </div>
               </ModalWrapper>
            </Background>
         ) : null}
      </>
   );
};

export default Dash;