import { useAuth } from "../provider/authContext";

export const Logout = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
