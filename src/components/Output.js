import './Output.css'

const Output = (props) => {

    return (
        <div className="output">
            <div className="prev-operand"> {props.prevOperand} </div>
            <div className="current-operand"> {props.currentOperand} </div>
        </div>
    )
}

export default Output