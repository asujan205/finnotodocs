import { useAuth } from "../Modules/provider/authContext";

export const Logout = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
