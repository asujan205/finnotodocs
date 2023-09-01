import { AuthPageProps } from "./authpage.types";
import { cn } from "../../utils/common.ui.utils";

const AuthWrapper = (props: AuthPageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col mx-auto mt-16  items-center justify-between min-h-[500px] max-w-[500px] shadow-md rounded-sm py-12  sm:w-full",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default AuthWrapper;
