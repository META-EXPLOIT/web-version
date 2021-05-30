import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

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
   z-index: 1001;

`;

export const ModalWrapper = styled.div`
   width: 80vw;
   height: auto;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: #f8f8f8;
   display: grid;
   grid-template-columns: 1fr 1fr;
   position: relative;
   border-radius: 10px;
`;

export const ModalImg = styled.img`
   padding-top: 100px;
   width: 80%;
   height: 80%;
   border-radius: 10px 0 0 10px;
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

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: red;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;