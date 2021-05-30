import React from 'react';
import Header from '../components/header/index.js'
import SectionOne from '../components/home/SectionOne/SectionOne.js';
import SectionTwo from '../components/home/SectionTwo/SectionTwo.js';
import SectionThree from '../components/home/SectionThree/SectionThree.js';
import LastSection from '../components/home/LastSection/LastSection.js';
import Footer from '../components/home/Footer/Footer.js';

export default function Home () {
   return (
      <>
         <Header/>
         <SectionOne/>
         <SectionTwo/>
         <SectionThree/>
         <LastSection/>
         <Footer/>
      </>
   );
}