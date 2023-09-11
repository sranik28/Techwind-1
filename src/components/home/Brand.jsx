import React from 'react';
import amazon from '../../assets/brand/amazon.png'
import google from '../../assets/brand/google.png'
import lenovo from '../../assets/brand/lenovo.png'
import payPal from '../../assets/brand/paypal.png'
import spotify from '../../assets/brand/spotify.png'
import shopify from '../../assets/brand/shopify.png'

const Brand = () => {
    return (
        <div className='container mb-20'>
            <div className='grid md:grid-cols-6'>
                <img className='w-20' src={amazon} alt="" />
                <img className='w-20' src={google} alt="" />
                <img className='w-20' src={lenovo} alt="" />
                <img className='w-20' src={payPal} alt="" />
                <img className='w-20' src={spotify} alt="" />
                <img className='w-20' src={shopify} alt="" />
            </div>
        </div>
    );
};

export default Brand;