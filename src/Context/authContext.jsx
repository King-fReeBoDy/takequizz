import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("desi");
  const [isLoading, setLoading] = useState(false);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
