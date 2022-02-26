import React from 'react'

import './Home.css'

import Product from './product'


function  Home() {
  return (
    <div className='home' >
        <div className="home__container">
            <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        </div>

        <div className="home__row">
            <Product title = 'Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers' price = {29.99} image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg' rating = {5} />
            <Product title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl' price = {239.99} image = 'https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY200_.jpg' rating = {4}/>
        </div>

        <div className="home__row">
            <Product title = 'HoMedics White Noise Sound Machine | Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds.' price = {23.87} image = 'https://images-na.ssl-images-amazon.com/images/I/61XYX1tzoTL.__AC_SY300_SX300_QL70_FMwebp_.jpg' rating={5} />
            <Product title = 'HBCyoU Homecoming Queen Nicole 18-inch Doll & Accessories, Wavy Hair, Deep Brown Skin Tone.' image = 'https://m.media-amazon.com/images/I/81eRi2w+9DL._AC_UL320_.jpg' rating={3} price={23.99}/>
            <Product title= 'EpochAir Remote Control Car, 2.4GHz High Speed RC Cars, Offroad Hobby RC Racing Car with 2 Rechargeable Batteries' image = 'https://m.media-amazon.com/images/I/715Igl2a1eL._AC_UL320_.jpg' price = {24.15} rating = {1}/> 
        </div>

        <div className="home__row">
            <Product title = 'NPET K32 Wireless Gaming Keyboard, LED Backlit, Multimedia Keys, Silent Membrane Keyboard with Wrist Rest for Desktop, Computer, PC' image = 'https://m.media-amazon.com/images/I/71mKnxMOdmL._AC_UY218_.jpg' price ={50} rating = {4}/>
        </div>
    </div>
  )
}

export default  Home