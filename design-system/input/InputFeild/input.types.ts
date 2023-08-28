/**
 * Interface representing the props for an input field component.
 */

import { ReactNode } from "react";

export interface InputErrorMessageInterface {
  error: string | string[];
  warning?: string;
}
export interface LabelInterface
  extends Omit<InputErrorMessageInterface, "warning"> {
  label?: string | ReactNode;
  name?: string;
  className?: string;
  required?: boolean;
  verified?: boolean;
  rightComponent?: ReactNode;
  value?: string;
}

export interface FormControlInterface {
  children: ReactNode;
  containerClass?: string;
  className?: string;
}
export interface InputMessageInterface
  extends Omit<InputErrorMessageInterface, "warning"> {
  message?: React.ReactNode;
  messageComponent?: React.ReactNode;
}

export interface InputFieldProps {
  onChange?(value: any): void;
  onDebounceChange?(value: any): void;
  onBlur?(value: any): void;
  onCopy?(value: any): void;
  onPaste?(value: any): void;
  onAsyncBlur?(value: any, next: () => void): void;
  onClick?(e: any): void;
  onFocus?(e: any): void;
  onEnter?(value: any, e: React.KeyboardEvent<HTMLInputElement>): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonStart?: React.ReactNode;
  addonEnd?: React.ReactNode;
  error?: string | string[];
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: boolean;
  autoUppercase?: boolean;
  inputClassName?: string;
  groupClassName?: string;
  className?: string;
  label?: React.ReactNode | string;
  name?: string;
  value?: any;
  defaultValue?: any;
  placeholder?: any;
  isVerified?: boolean;
  type?:
    | "text"
    | "search"
    | "email"
    | "number"
    | "textarea"
    | "tel"
    | "hidden"
    | "datetime-local"
    | "password";
  size?: keyof typeof InputSizes;
  min?: number;
  max?: number;
  maxLength?: number;
  debounceParams?: DebouceParams;
  message?: React.ReactNode;
  messageComponent?: React.ReactNode;
  required?: boolean;
  isAmount?: boolean;
  isLoading?: boolean;
  warning?: string;
  smallWidth?: boolean;
  trimSpecialChar?: boolean;
}

/**
 * Interface representing the debounce parameters.
 */
type DebouceParams = {
  wait?: number;
  immediate?: boolean;
};

/**
 * Object representing input sizes.
 */
export const InputSizes = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

/**
 * Object representing input group sizes.
 */
export const InputGroupSizes: Record<keyof typeof InputSizes, string> = {
  xs: "input-group-xs",
  sm: "input-group-sm",
  md: "input-group-md",
  lg: "input-group-lg",
};
