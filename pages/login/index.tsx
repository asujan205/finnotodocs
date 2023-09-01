import IconWrapper from "../../components/Authpage/iconwraper";
import AuthWrapper from "../../components/Authpage/authPage";
import LoginForm from "../../components/Form/login.form";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";

const SigninPage = () => {
  const router = useRouter();

  useLayoutEffect(() => {}, []);
  return (
    <div className="bg-white w-screen h-screen inset-y-0 absolute ">
      <div className="	">
        <AuthWrapper>
          <IconWrapper />
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <LoginForm />
          </div>
        </AuthWrapper>
      </div>
    </div>
  );
};

export default SigninPage;
