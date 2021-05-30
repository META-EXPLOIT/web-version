import React from 'react';
import { StyledFooter } from './styled_footer';
import mini_smile from '../../../assets/icons/mini_smile.svg';

export default function Footer () {
   return (
      <>
         <StyledFooter>
            <img className='image' alt='' src={mini_smile}></img>
         </StyledFooter>
      </>
   );
}