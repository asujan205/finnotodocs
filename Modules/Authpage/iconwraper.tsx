import { useRouter } from "next/router";

const IconWrapper = () => {
  const router = useRouter();

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto cursor-pointer"
        src="/logo-1.png"
        alt="logo"
        onClick={() => router.push("/")}
      />
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign In
      </h2>
      <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Enter yours credentials to access your account
      </p>
    </div>
  );
};

export default IconWrapper;
