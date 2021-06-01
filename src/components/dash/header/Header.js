import React from 'react';
import { StyledHeader, FlatButton, UserButton } from './styled_header.js';
import logo from '../../../assets/icons/logo.svg';
import avatar from '../../../assets/images/avatar.svg';

export default function Header (props) {
   return (
      <>
         <StyledHeader>
            <img src={logo} width='50px' alt='logo da diversight'/>
            <div className='buttondiv'>
               <FlatButton onClick={e => {
                  window.localStorage.removeItem("nome");
                  window.localStorage.removeItem("email");
                  window.localStorage.removeItem("id");
                  window.location.href="/";
               }}>
               Sair</FlatButton>
               <UserButton>{localStorage.getItem('nome')}
                  <img src={avatar} alt='avatar do usuario'/>
               </UserButton>
            </div>
         </StyledHeader>
      </>
   );
}