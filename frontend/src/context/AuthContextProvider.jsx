import { Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

export const AuthContextProvider = (value) => (
  <AuthContext.Provider value={value}>
    <Outlet />
  </AuthContext.Provider>
)

export default AuthContextProvider;