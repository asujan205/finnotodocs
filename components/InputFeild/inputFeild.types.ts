export interface InputFeildProps {
  type?: "email" | "password";

  onChange?(value: any): void;
  value?: string;
  placeholder?: string;
  name?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  labelClassName?: string;
  label?: string;
}

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
}
