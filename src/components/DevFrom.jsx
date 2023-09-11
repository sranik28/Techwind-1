import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiKey2Line } from 'react-icons/ri';

const DevFrom = () => {
    return (
        <div>
            <form>
                <label className='font-medium' htmlFor="Your Name"> Your Name :</label> <br />
                <div className='relative'>
                    <FontAwesomeIcon className='absolute top-5 left-5' size='lg' icon={faUser} />
                    <input className='h-10 mt-3 mb-5 w-[60%] px-3 py-2 bg-transparent border border-gray-200 rounded outline-none  form-input ps-14  focus:border-indigo-600 dark:focus:border-indigo-600 focus:ring-0"' type="text" placeholder='Name' />
                </div>
                <label className='font-medium' htmlFor="Your Email"> Your Email : </label> <br />
                <div className='relative'>
                    <FontAwesomeIcon className='absolute top-6 left-5' size='lg' icon={faEnvelope} />
                    <input className='h-10 mt-3 mb-5 w-[60%] px-3 py-2 bg-transparent border border-gray-200 rounded outline-none  form-input ps-14  focus:border-indigo-600 dark:focus:border-indigo-600 focus:ring-0"' type="text" placeholder='Email' />
                </div>
                <label className='font-medium' htmlFor="Enter Password"> Enter Password : </label> <br />
                <div className='relative'>
                    {/* <FontAwesomeIcon className='absolute top-5 left-5' size='lg' icon={faUser} /> */}
                    <RiKey2Line className='absolute text-2xl top-5 left-5' />
                    <input className='h-10 mt-3 mb-5 w-[60%] px-3 py-2 bg-transparent border border-gray-200 rounded outline-none  form-input ps-14  focus:border-indigo-600 dark:focus:border-indigo-600 focus:ring-0"' type="text" placeholder='Password' />
                </div>

            </form>
        </div>
    );
};

export default DevFrom;