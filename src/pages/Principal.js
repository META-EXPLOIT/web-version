import React, {useState} from 'react'
import Header from '../components/dash/header/Header.js';
import Sidebar from '../components/dash/sidebar/Sidebar.js';
import Search from '../components/dash/searches/Search.js';
import {Wrapper, Container} from './styled_principal';
import Charts from '../components/dash/charts/Charts.js';

export default function Principal() {
   const [ showSearch, setShowSearch ] = useState(false);
   const [ showDash, setShowDash ] = useState(false);
   
   return (
      <Container>
         <Header/>
         <div>
            <Sidebar showSearch={showSearch} setShowSearch={setShowSearch}
            showDash={showDash} setShowDash={setShowDash}/>
            <Wrapper>
               {showSearch ? (
                  <Search />
               ) : null}
               {showDash ? (
                  <Charts/>
               ) : null}
            </Wrapper>
         </div>
      </Container>
   )
}
