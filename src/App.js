import './App.css';
import React, { useState, useEffect } from 'react';
import { homePage, getPageFromPath } from './scripts/pageRouter';

const App = () => {
    const [page, setPage] = useState(homePage);

    useEffect(() => {
        console.log(`setting page to ${window.location.pathname}`);
        setPage(getPageFromPath(window.location.pathname));
    }, [window.location.pathname]);

    return (
        <div className="app">
            <nav className='bg-gray-800'>
                <div className='max-w-7xl  px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='hidden flex-shrink-0 items-center sm:block'>
                                <span className='text-white text-lg font-extrabold'>DIY PORTFOLIO CALCULATOR</span>
                            </div>
                            <div className='flex sm:block sm:ml-6'>
                                <div className='flex space-x-4'>
                                    <a href='/home' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        Home</a>
                                    <a href='/buy-calculator' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        Buy Calculator</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            { page }
        </div>
    );
}

export default App;
