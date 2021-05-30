import React from 'react';
import SignForm from '../signupform/index.js';
import LoginForm from '../loginform/index.js';
import image from '../../assets/images/charts-modal.svg';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './styled_modal.js';

export const Modal = ({showModal, setShowModal, showForm, setShowForm}) => {
   return (
      <>
         { showModal && showForm ? (
            <Background>
               <ModalWrapper showModal={showModal}>
                  <ModalContent>
                     <LoginForm showForm={showForm}/>
                  </ModalContent>
                  <ModalImg src={image} alt='pessoas vendo um grafico'/>
                  <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)}/>
               </ModalWrapper>
            </Background>
         ) : null}
         { showModal && !showForm ? (
            <Background>
               <ModalWrapper showModal={showModal}>
                  <ModalContent>
                     <SignForm/>
                  </ModalContent>
                  <ModalImg src={image} alt='pessoas vendo um grafico'/>
                  <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)}/>
               </ModalWrapper>
            </Background>
         ) : null}
      </>
   );
};