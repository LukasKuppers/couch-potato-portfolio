import React from 'react';

const ShareSelector = ({id, ticker, onChangeTicker}) => {

    const handleTickerChange = event => {
        console.log(`Selector:handle change:${event.target.value}`);
        onChangeTicker(id, event.target.value);
    }

    return (
        <div className='share-selector'>
            <label>
                Ticker Symbol or Company Name:
                <input type='text' value={ticker} onChange={handleTickerChange} />
            </label>
        </div>
    );
}

export default ShareSelector;
