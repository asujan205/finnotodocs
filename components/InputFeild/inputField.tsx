import { InputFeildProps } from "./inputFeild.types";
import { LabelProps } from "./inputFeild.types";
import { cn } from "../../utils/common.ui.utils";

const InputFeild = (props: InputFeildProps) => {
  return (
    <div className="input-container">
      <Label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </Label>
      <input
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
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

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
