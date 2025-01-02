export default function UserInput({ inputType = "number", investmentParameter, children, onInputChange, inputValue }) {
    return <div>
        <label htmlFor={investmentParameter}>{children}</label>
        <input
            type={inputType}
            id={investmentParameter}
            required
            onChange={event => onInputChange(investmentParameter, event.target.value)}
            value={inputValue}
        />
    </div>
}