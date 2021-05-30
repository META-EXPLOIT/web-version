import { AppBar, withStyles, Toolbar, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import DisLogo from './logo.svg';
import {Modal} from '../modal/Modal.js'
import { GlobalStyle } from "../globalStyles";
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
   header: {
      backgroundColor: "#1362FF",
      paddingRight: "98px",
      paddingLeft: "109px",
      top: 0,
   },
   loginButton: {
      fontFamily: 'Mulish',
      fontWeight: 700,
      size: '16px',
      paddingRight: '88px',
      color: '#f8f8f8',
   },
   signButton: {
      fontFamily: 'Mulish',
      fontWeight: 700,
      size: '16px',
      color: '#2B2B2B',
      paddingLeft: '88px',
   },
   toolbar: {
      display: 'flex',
      justifyContent: 'space-between', 
   },
}));

const ColorButton = withStyles((theme) => ({
   root: {
     color: '#2B2B2B',
     backgroundColor: "#FFBC42",
     textTransform: 'unset !important',
     width: '140px',
   },
 }))(Button);

 export const StyledBtn = styled.button`
   background-color: Transparent;
   background-repeat:no-repeat;
   border: none;
   cursor:pointer;
   overflow: hidden;
   outline:none;

   width: 85px;
   height: 24px;  

   font-family: Mulish;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;

   color: #F8F8F8;
`;
 

export default function Header() {
   const classes = useStyles();
   const [ showModal, setShowModal ] = useState(false);
   const [ showForm, setShowForm ] = useState(false);

   const openModals = () => {
      setShowModal(prev => !prev);
      if (showForm == true) setShowForm(false);
   };

   const openModall = () => {
      setShowModal(prev => !prev);
      if (showForm == false) setShowForm(true);
   };

   return(
      <AppBar className={classes.header} position="static">
         <Toolbar className={classes.toolbar}>
            <div>
               <img src={DisLogo} alt="Diversight Logo"/>
            </div>
            <div>
            <StyledBtn onClick={openModall}>Login</StyledBtn>
               
               <ColorButton 
               cName={classes.signButton} 
               variant="contained" 
               color="secondary"
               onClick={openModals}>Cadastrar</ColorButton>
               <Modal className='teste' showModal={showModal} setShowModal={setShowModal} showForm={showForm} setShowForm={setShowForm}/>
               <GlobalStyle/>
            </div>
         </Toolbar>
         
      </AppBar>
   );
}