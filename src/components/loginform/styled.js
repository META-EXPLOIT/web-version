import styled from 'styled-components';

export const Container = styled.div`
   display: block;
   width: 312px;
   .buttons{
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const StyledHeaderDiv = styled.div`
   display: flex;
   align-items: flex-start;
   .ola {
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 33px;
      color: #1C1C1C;
   }
`;

export const FormWrapper = styled.form`
   display: block;
   width: 312px;
`;

export const StyledLabel = styled.label`
   margin-bottom: 0.5em;
   font-family: Mulish;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
   
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   color: #2B2B2B;
`;

export const StyledInput = styled.input`
   background: #FFFFFF;

   border: 1px solid #D4D4D4;
   box-sizing: border-box;
   border-radius: 12px; 

   &:focus {
      border: 1px solid #1362FF;
      box-shadow: 0px 0px 0px 3.2px rgba(0, 123, 255, 0.25);
      outline:none;
   }

   padding: 0.5em;
   margin-bottom: 10px;
   width: 312px;
   height: 44px;
`;

export const StyledButton = styled.button`
   width: 312px;
   height: 44px;
   padding: 10px;
   margin-top: 5px;
   background: #1362FF;
   outline: none;
   overflow: hidden;
   border:none;
   cursor: pointer;
   border-radius: 12px;

   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   color: #F7F7F7;
`;

export const StyledBtn = styled.button`
   background-color: Transparent;
   background-repeat:no-repeat;
   border: none;
   cursor:pointer;
   overflow: hidden;
   outline:none;

   width: 85px;
   height: 24px;  
   margin: 42px;

   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   color: #1362FF;
`;

export const ShowPassBtn = styled.button`
   position: absolute;
   left: 7.42%;
   right: 7.42%;
   top: 18.16%;
   bottom: 18.16%;
   cursor: pointer;

   color: #1362FF;
`;