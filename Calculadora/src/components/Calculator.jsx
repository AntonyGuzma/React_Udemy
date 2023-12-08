import React from "react";


//criaçao base do componente
const Calculator = () => {
    return (
        <div className="calculator">
            <div className="complete-operation">3+3 = 6</div>
            <div className="display">6</div>
            <div className="buttons"></div>
            <button>=</button>
        </div>
    )
}

export default Calculator