import React, {useState} from 'react';
import { StyledBarDiv, SideButtonB, SideButtonA } from './styled_sidebar.js';
import dash_icon_a from '../../../assets/icons/dash_icon_a.svg';
import dash_icon_b from '../../../assets/icons/dash_icon_b.svg';
import search_icon_a from '../../../assets/icons/search_icon_a.svg';
import search_icon_b from '../../../assets/icons/search_icon_b.svg';

export default function Sidebar ({showSearch, setShowSearch, showDash, setShowDash}) {
   

   const clickHandleS = () => {
      setShowSearch(true);
      setShowDash(false);
      console.log("handleS ", showSearch)
   };

   const clickHandleD = () => {
      setShowDash(true);
      setShowSearch(false);
      console.log("handleD", showDash)
   };

   return (
      <>
         <StyledBarDiv>
               {showDash ? (
                  <SideButtonA className="a" onClick={clickHandleD}>
                     <img src={dash_icon_b} alt=''/>
                     Dashboard
                  </SideButtonA>
               ) : <SideButtonB className="b" onClick={clickHandleD}>
                     <img src={dash_icon_a} alt=''/>
                     Dashboard
                  </SideButtonB>}
               {showSearch ? (
                  <SideButtonA className="a" onClick={clickHandleS}>
                     <img src={search_icon_b} alt=''/>
                     Pesquisas
                  </SideButtonA>
               ): <SideButtonB className="b" onClick={clickHandleS}>
                     <img src={search_icon_a} alt=''/>
                     Pesquisas
                  </SideButtonB>}
         </StyledBarDiv>
      </> 
   );
}