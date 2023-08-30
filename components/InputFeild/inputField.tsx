import { InputFeildProps } from "./inputFeild.types";
import { LabelProps } from "./inputFeild.types";

const InputFeild = (props: InputFeildProps) => {
  return (
    <div className="input-container">
      <Label htmlFor={props.name} className={props.labelClassName} />
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        required={props.required}
      />
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

export default InputFeild;

export const Label = (props: LabelProps) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
};
