import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase.config";

const UserContext = createContext();
export const useAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged((user) => setCurrentUser(user));

  //     return unsubscribe;
  //   }, []);

  const value = {
    currentUser,
    signup,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};