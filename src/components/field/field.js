import "./field.css";

function Field({label, placeholder, required, type, name, value, onChangeField}) {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <input type={type || "text"} name={name} placeholder={placeholder} onChange={onChangeField} value={value} required={required}/>
        </div>
    )
}

export default Field