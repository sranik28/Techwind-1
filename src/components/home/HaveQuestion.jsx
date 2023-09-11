import { MdOutlineCall } from 'react-icons/md';

const HaveQuestion = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className='mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal'>Have Question ? Get in touch!</h1>
                <p className='max-w-xl mx-auto text-slate-400'>Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.Contact us</p>
                <button className='inline-flex items-center px-5 py-2 mt-10 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border rounded-md bg-primary hover:bg-indigo-700 border-primary hover:border-indigo-700'> <span className='mr-2'>
                    <MdOutlineCall className='text-xl'/>
                </span> Contact us</button>
            </div>
        </div>
    );
};

export default HaveQuestion;