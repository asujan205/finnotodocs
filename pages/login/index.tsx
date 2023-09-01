import IconWrapper from "../../Modules/Authpage/iconwraper";
import AuthWrapper from "../../Modules/Authpage/authPage";
import LoginForm from "../../components/Form/login.form";

const SigninPage = () => {
  return (
    <div className="bg-white w-screen h-screen inset-y-0 absolute ">
      <AuthWrapper>
        <IconWrapper />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <LoginForm />
        </div>
      </AuthWrapper>
    </div>
  );
};

export default SigninPage;
