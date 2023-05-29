import { Navigate } from "react-router-dom";
import { useContext } from "react";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if(!currentUser) {
    return <Navigate to="/" replace={true}  />
  }
  return children;
