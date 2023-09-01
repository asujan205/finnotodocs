import React, { forwardRef } from "react";
import { InputFeildProps } from "./inputFeild.types";
import { cn } from "../../utils/common.ui.utils";
import { LabelProps } from "./inputFeild.types";

const InputFeild = forwardRef<HTMLInputElement, InputFeildProps>(
  (props, ref) => {
    return (
      <div className="input-container">
        <label htmlFor={props.name} className={props.labelClassName}>
          {props.label}
        </label>
        <input
          ref={ref}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className={cn(
            "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            props.className
          )}
          required={props.required}
        />
      </div>
    );
  }
);

export default InputFeild;

export const Label = (props: LabelProps) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className={cn(
        "block text-sm font-medium leading-6 text-gray-900",
        props.className
      )}
    >
      {props.children}
    </label>
  );
};
