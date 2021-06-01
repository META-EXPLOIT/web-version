import styled from 'styled-components';

export const Background = styled.div`
   width: 100%;
   height: 100%;
   background: rgba(47, 47, 47, 0.58);
   position: fixed;
   display:  flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 10;

`;

export const ModalWrapper = styled.div`
  width: 65vw;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #FDFDFD;
  position: relative;
  border-radius: 10px;
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  p {
    margin-bottom: 1rem;
  }
`;

export const CloseModalButton = styled.button`
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline:none;

  width: 75px;
  height: 24px;
  margin-right: 50px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #E91717;
`;

export const StyledButton = styled.button`
   width: 200px;
   height: 40px;
   padding: 10px;
   margin-top: 5px;

   background: #1362FF;
   box-shadow: 0px 10px 35px rgba(19, 98, 255, 0.15);

   outline: none;
   overflow: hidden;
   border:none;
   border-radius: 12px;
   cursor: pointer;

   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   display: flex;
   align-items: center;
   justify-content: center;

   color: #F7F7F7;
`;