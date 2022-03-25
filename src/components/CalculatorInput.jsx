import React, { useState } from "react";
import ShareSelector from "./ShareSelector";

const MIN_NUM_SHARES = 2;

const CalculatorInput = () => {
    const [forms, setForms] = useState({1: {}});

    const renderForms = () => {
        return (
            <ul>
                {Object.entries(forms).map(([key, data]) =>
                    <li key={key}><ShareSelector /></li>)}
            </ul>
        );
    }

    return (
        <div className="calculator-input">
            {renderForms()}
        </div>
    );
}

export default CalculatorInput;
