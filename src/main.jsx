import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
export const AuthContext = createContext();

const [currentUser, setCurrentUser] = useState(null);
const [loading, setLoading] = useState(true);

// signin with google
const signinWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// signout
const logout = () => signOut(auth);

// set currentUser
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    setLoading(false);
  });

  return unsubscribe;
}, []);

export const UserAuth = () => {
  return useContext(AuthContext);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider
      value={{
        unsubscribe,
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout,
      }}
    >
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
);
