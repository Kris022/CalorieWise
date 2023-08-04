import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // update state
    dispatch(logoutUser());
  };

  return { logout };
};
