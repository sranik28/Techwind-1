import React from 'react';
import PartnersSlider from '../PartnersSlider';

const Partners = () => {
    return (
        <div className='container mt-44'>
            <div className='mb-16 text-center'>
                <h4 className='mb-4 text-base font-medium text-indigo-600'>We believe in building each other and hence</h4>
                <h2 className='mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal'>Work with some amazing partners</h2>
                <p className='max-w-xl mx-auto text-slate-400'>Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <PartnersSlider />
        </div>
    );
};

export default Partners;