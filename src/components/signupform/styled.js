import styled from 'styled-components';

export const Container = styled.div`
   display: block;
   width: 312px;
   margin: 15px;
`;

export const StyledHeaderDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   .ola {
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 33px;
      margin: 0px;
      color: #1C1C1C;
   }
   .text {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: left;

      color: #434343;
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
   margin-bottom: 0.5em;
   width: 312px;
   height: 44px;
`;

export const StyledSelect = styled.select`
   background: #FFFFFF;

   font-family: Mulish;
   font-weight: normal;
   font-size: 18px;
   line-height: 28px;
   color: #2B2B2B;

   border: 1px solid #D4D4D4;
   box-sizing: border-box;
   border-radius: 12px; 

   &:focus {
      border: 1px solid #1362FF;
      box-shadow: 0px 0px 0px 3.2px rgba(0, 123, 255, 0.25);
      outline:none;
   }

   padding: 0.5em;
   margin-bottom: 0.5em;
   width: 312px;
   height: 44px;
`;

export const StyledButton = styled.button`
   width: 312px;
   height: 44px;
   paddin: 10px;
   margin-top: 5px;
   background: #1362FF;
   outline: none;
   overflow: hidden;
   border:none;
   border-radius: 12px;
   cursor:pointer;
   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   color: #F7F7F7;
`;

export const StyledParagraph = styled.p`
   color: #000000;
`;