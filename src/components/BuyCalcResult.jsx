import React, { useState } from "react";
import styles from "../Styles";

const BuyCalcResult = ({result, closeModal}) => {

    const renderResults = () => {
        if (result == {}) {
            return <div></div>;
        } else if ('error' in result) {
            return <p className='text-md font-bold text-red-600'>{result.error}</p>
        } else {
            return (
                <div>
                    <p className='text-md my-5'>
                        The amount of shares you should puchase of each security to reach your desired portfolio allocation is given below:
                    </p>
                    <ul className='bg-gray-200 rounded-xl p-3 font-bold'>
                        {Object.entries(result).map(([key, value]) => 
                            <li key={key}>{key}: {value}</li>)}
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className='fixed z-10 inset-0 overflow-y-auto' aria-labelledby="modal-title" role='dialog' aria-modal='true'>
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>
                <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>&#8203;</span>

                <div className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                    <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                        <div className='sm:flex sm:items-start'>
                            <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                                <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>Calculator Results</h3>
                                <div className='mt-2'>
                                    {renderResults()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <button onClick={closeModal} className={styles.btn_pill_blue + ' w-full m-5'}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyCalcResult;
