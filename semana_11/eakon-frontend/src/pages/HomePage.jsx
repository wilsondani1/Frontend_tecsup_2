import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/homeSlice";

const HomePage = () => {
  const { value } = useSelector(state => state.home);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{value}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default HomePage;