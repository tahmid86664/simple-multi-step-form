import React from "react";

const TextInput = ({
  label,
  propertyName,
  isRequired,
  isAutofocus,
  register,
  placeholder,
}: {
  label: string;
  propertyName: string;
  isRequired: boolean;
  isAutofocus?: boolean;
  register: any;
  placeholder: string;
}) => {
  return (
    <div className="flex gap-1 flex-col mb-2">
      <label htmlFor={propertyName}>{label}</label>
      <input
        autoFocus={isAutofocus}
        id={propertyName}
        {...register(`${propertyName}`)}
        className="border h-11 px-4 rounded-md focus:outline-zinc-500"
        required={isRequired}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
