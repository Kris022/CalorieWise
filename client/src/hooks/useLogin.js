import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/authSlice";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const login = async (newUser) => {
    setIsLoading(true);
    setError(null);

    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newUser }),
      }
    );

    const json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (res.ok) {
      console.log(json);
      // save user token in local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update context
      dispatch(loginUser(json));

      // updaing laoding state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
