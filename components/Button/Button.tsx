import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/common.ui.utils";
const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  className,
  onClick,
  disabled,
  apperance,
  loading,
}) => {
  const getButtonClassNames = () => {
    if (apperance === "login") {
      return cn(
        "flex w-full justify-center px-3 py-2 text-sm font-semibold leading-6 shadow-sm",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        "bg-black text-white hover:bg-black hover:text-white",
        "disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:opacity-50",
        className
      );
    } else if (apperance === "cancel") {
      return cn(
        "flex w-full justify-center px-2 py-2 text-sm font-semibold leading-6 shadow-sm bg-gray-100",

        className
      );
    } else {
      // Default button styles
      return cn(
        "px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm",
        "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      );
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={getButtonClassNames()}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
