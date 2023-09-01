export interface ButtonProps {
  type?: "button" | "submit" | "reset";

  children?: React.ReactNode;
  className?: string;

  onClick?: (...args: any) => void;

  disabled?: boolean;

  apperance?: "login" | "cancel";

  loading?: boolean;
}
