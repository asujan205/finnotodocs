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
}

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
}
