import React from 'react';
import { StyledFooter } from './styled_footer';
import mini_smile from '../../../assets/icons/mini_smile.svg';
import figma_logo from '../../../assets/icons/figma.svg';
import git_logo from '../../../assets/icons/git.svg';
import trello_logo from '../../../assets/icons/trello.svg';


export default function Footer () {
   const handleClickf = () => {
      window.open('https://www.figma.com/file/XmcmHrpzHQMSrxL1ikAufX/Aplicativo-Time-6?node-id=191%3A181');
   }
   const handleClickg = () => {
      window.open('https://github.com/META-EXPLOIT/');
   }
   const handleClickt = () => {
      window.open('https://trello.com/b/5iWmBQQW/meta-exploit-camp-ioasys');
   }
   return (
      <>
         <StyledFooter>
            <img className='image' alt='' src={mini_smile}></img>
            <p className='sub'>Created by Meta Exploit Team</p>
            <div className='logos'>
               <img alt='logo' src={figma_logo} onClick={handleClickf}/>
               <img alt='logo' src={git_logo} onClick={handleClickg}/>
               <img alt='logo' src={trello_logo} onClick={handleClickt}/>
            </div>
         </StyledFooter>
      </>
   );
}