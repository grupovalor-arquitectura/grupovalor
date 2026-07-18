import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  login as loginService,
  logout as logoutService,
  observeAuth,
} from "../services/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe = observeAuth(
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const login = async (
    email,
    password
  ) => {
    const user = await loginService(
      email,
      password
    );

    setUser(user);

    return user;
  };

  const logout = async () => {
    await logoutService();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}