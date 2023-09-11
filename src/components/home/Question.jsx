import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Question = () => {
    return (
        <div className='container mb-20 mt-44'>
            <div className='grid gap-10 md:grid-cols-2'>
                <div>
                    <span className='flex items-center gap-3'>
                        <FontAwesomeIcon className='text-xl text-primary' icon={faCircleQuestion} />
                        <h3 className='mb-2 text-xl font-semibold'>How our <span className='text-primary'>Techwind</span> work ?</h3>
                    </span>
                    <p className='px-8 text-slate-400'>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                </div>
                <div>
                    <span className='flex items-center gap-3'>
                        <FontAwesomeIcon className='text-xl text-primary' icon={faCircleQuestion} />
                        <h3 className='mb-2 text-xl font-semibold'>What is the main process open account ?</h3>
                    </span>
                    <p className='px-8 text-slate-400'>If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                </div>
                <div>
                    <span className='flex items-center gap-3'>
                        <FontAwesomeIcon className='text-xl text-primary' icon={faCircleQuestion} />
                        <h3 className='mb-2 text-xl font-semibold'>How to make unlimited data entry ?</h3>
                    </span>
                    <p className='px-8 text-slate-400'>Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                </div>
                <div>
                    <span className='flex items-center gap-3'>
                        <FontAwesomeIcon className='text-xl text-primary' icon={faCircleQuestion} />
                        <h3 className='mb-2 text-xl font-semibold'>Is <span className='text-primary'>Techwind</span> safer to use with my account ?</h3>
                    </span>
                    <p className='px-8 text-slate-400'>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;