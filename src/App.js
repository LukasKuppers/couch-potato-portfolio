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
            <div className = 'app-bar'>
                <h1 className='text-3xl font-bold'>
                    PORTFOLIO HELPER
                </h1>
                <a href='/home'>HOME</a>
                <br />
                <a href='/buy-calculator'>CALCULATOR</a>
            </div>
            { page }
        </div>
    );
}

export default App;
