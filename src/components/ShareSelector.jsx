import React from 'react';

const ShareSelector = ({id, ticker, submit, revoke}) => {

    const handleTickerChange = event => submit(id, event.target.value);

    const revokeSelector = () => revoke(id);

    return (
        <div className='share-selector'>
            <label>
                Ticker Symbol or Company Name:
                <input type='text' value={ticker} onChange={handleTickerChange} />
            </label>
            <button onClick={revokeSelector}>REMOVE</button>
        </div>
    );
}

export default ShareSelector;
