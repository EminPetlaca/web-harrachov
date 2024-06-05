import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

import "./ZakladInfo.css";
import InfoCard from './InfoCard';
import SecondFooter from '../../../components/Footer/SecondFooter';

export default function ZakladInfo() {
  return (
    <>
    <Header/>
    <div className="info-container">
    <h1 className='info-title'>Zakladni info</h1>
    <InfoCard/>
    </div>
    <Footer/>
    <SecondFooter/>
    </>
  )
}
