// import React from 'react';
// import { Route } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route {...rest} render={
//       props => <Component {...rest} {...props} />
//     } />
//   )
// }

// export default ProtectedRoute;

// class Auth {
//   constructor() {
//     this.authenticated = false;
//   }

//   loginStudent(cb){
//     this.authenticated = true;
//     cb();
//   }

//   loginAdmin(cb){
//     this.authenticated = true;
//     cb();
//   }

//   signOut(cb){
//     this.authenticated = false;
//     cb()

//   }

//   isAuthenticated() {
//     return this.authenticated
//   }

// }

// export default new Auth()

import React, { useEffect, useState } from "react";
import app from "firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};