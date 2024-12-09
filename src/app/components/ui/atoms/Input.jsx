import React from "react";

export default function Input({ type, label, placeholder, name, id, value, onChange, classNameInp , classNameLabel, error, disabled, ...props }) {
  return (
    <div>
      <p htmlFor={label} className={`mb-3  ${classNameLabel}`}>{label}</p>
      <input type={type} id={label} value={value} name={name} placeholder={placeholder} className={classNameInp} onChange={onChange} disabled={disabled} />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}
