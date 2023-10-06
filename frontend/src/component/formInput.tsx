import React from "react";


const FormInput = (props: any) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;