import { useContext } from "react";
import { UserContext } from "../context/UserContex";

const LoginPage = () => {
  const { user } = useContext(UserContext);
  return (<h1>LoginPage: {user ? 'Online' : 'Offline'}</h1>);
};

export default LoginPage;