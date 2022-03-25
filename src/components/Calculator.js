import React, { useState, useEffect } from "react";
import './Calculator.css'
import Output from './Output'
import Button from './Button'

const Calculator = () => {
    const [prevOperand, setPrevOperand] = useState('')
    const [currentOperand, setCurrentOperand] = useState('')

    const appendNumber = (value) => {
        if (value === '.' && currentOperand.includes('.')) return false
        setCurrentOperand(`${currentOperand}${value}`)
    }

    const chooseOperation = (value) => {
        if (currentOperand === '') {
            return false
        }
        setPrevOperand(`${prevOperand}${currentOperand}${value}`)
        setCurrentOperand('')
    }

    const compute = () => {
        setCurrentOperand(`${eval(`${prevOperand}${currentOperand}`)}`)
        setPrevOperand('')
    }

    const deleteNumber = () => {
        if (currentOperand.length > 0) {
            setCurrentOperand(currentOperand.slice(0, -1))
        }
    }

    const clearAll = () => {
        setCurrentOperand('')
        setPrevOperand('')
    }

    const keydownHandler = (e) => {
        e.preventDefault();
        switch (e.key) {
            case 'Enter':
                compute()
                break;
            case 'Backspace':
                deleteNumber()
                break;
            case 'd':
                clearAll()
                break;
            default:
                const isNumber = /[0-9|\.]/.test(e.key)
                const isOperation = /[\+|\-|\*|\/]/.test(e.key)
                if (isNumber) {
                    appendNumber(e.key)
                }

                if (isOperation) {
                    chooseOperation(e.key)
                }
                break;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keydownHandler);
        return () => {
          window.removeEventListener("keydown", keydownHandler);
        };
      }, [currentOperand, prevOperand]);

    return (
        <div className="calculator">
            <Output prevOperand={prevOperand} currentOperand={currentOperand} />

            <Button value="AC" span="2" responseEvent={clearAll} />
            <Button value="DEL" responseEvent={deleteNumber} />
            <Button value="/" responseEvent={chooseOperation} />
            <Button value="1" responseEvent={appendNumber} />
            <Button value="2" responseEvent={appendNumber} />
            <Button value="3" responseEvent={appendNumber} />
            <Button value="*" responseEvent={chooseOperation} />
            <Button value="4" responseEvent={appendNumber} />
            <Button value="5" responseEvent={appendNumber} />
            <Button value="6" responseEvent={appendNumber} />
            <Button value="+" responseEvent={chooseOperation} />
            <Button value="7" responseEvent={appendNumber} />
            <Button value="8" responseEvent={appendNumber} />
            <Button value="9" responseEvent={appendNumber} />
            <Button value="-" responseEvent={chooseOperation} />
            <Button value="." responseEvent={appendNumber} />
            <Button value="0" responseEvent={appendNumber} />
            <Button value="=" responseEvent={compute} span="2" />
        </div>
    )
}

export default Calculator