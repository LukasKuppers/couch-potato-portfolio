import './App.css';
import React, { useState, useEffect } from 'react';
import { homePage, getPageFromPath } from './scripts/pageRouter';

const App = () => {
    const [page, setPage] = useState(homePage);

    useEffect(() => {
        console.log(`setting page to ${window.location.pathname}`);
        setPage(getPageFromPath(window.location.pathname));
    }, []);

    return (
        <div className="app bg-gray-100" style={{height:'100vh'}}>
            <nav className='bg-blue-600 drop-shadow-2xl'>
                <div className='max-w-7xl mx-auto  px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='hidden flex-shrink-0 items-center sm:block'>
                                <span className='text-white text-3xl font-extrabold font-sans'>DIY invest help</span>
                            </div>
                            <div className='flex sm:block sm:ml-6'>
                                <div className='flex space-x-4'>
                                    <a href='/home' className='text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        Home</a>
                                    <a href='/buy-calculator' className='text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        Calculators</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10'>
                { page }
            </div>
        </div>
    );
}

export default App;
