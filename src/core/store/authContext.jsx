import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { message } from "antd";
const AuthContext = createContext();
// created context for global state management
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // created moke api for testing
  const loginAPI = (data) => {
    return new Promise((res, rej) => {
      if (data.username === "abdullah" && data.password === "password") {
        setTimeout(() => {
          res({
            data: {
              username: "abdullah",
              id: 203,
              year: "2024",
              access_token: "aajffeueaofuyef342424hohfouh44",
            },
            meta: {
              status: 200,
              message: "login success",
            },
          });
        }, 2000);
      } else {
        rej({
          meta: {
            status: 403,
            message: "invalid username or password",
          },
        });
      }
    });
  };

  ///// loging function
  const login = useCallback(
    async (data) => {
      try {
        setLoading(true);
        // MOKE API CALL
        const res = await loginAPI(data);
        if (res?.meta?.status < 400) {
          setUser(res?.data);
          setError(null);
        } else {
          setError(res?.meta?.message);
          message.error(res?.meta?.message);
        }
        setLoading(false);
      } catch (error) {
        console.log("LOGIN ERROR", error);
        message.error(error?.meta?.message);
        setLoading(false);
      }
    },
    [user]
  );
  // logout function
  const logout = useCallback(() => {
    setUser(null);
  }, [user]);

  const value = useMemo(
    () => ({
      error,
      user,
      loading,
      login,
      logout,
    }),
    [user, login, logout, loading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
