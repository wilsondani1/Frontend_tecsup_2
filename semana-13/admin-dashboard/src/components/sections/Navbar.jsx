import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { user, setUser } = useUser();
  console.log(auth);
  createUserWithEmailAndPassword  (auth,'wilson_dani1@hotmail.com','123456789')


  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          {user ?
            <button onClick={() => { setUser(false) }}>Logout</button>
            :
            <NavLink to="/login">Login</NavLink>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;