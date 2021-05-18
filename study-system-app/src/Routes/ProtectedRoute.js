  
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

//   db.collection("users").doc(res.user.uid)
//     .onSnapshot((doc) => {
//         if (doc.data().access == true) {
//             console.log(res.user)
//             props.history.push("/AdminHome");
//         } else {
//             console.log('invalid account access')
//         }
//     });


  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


export default ProtectedRoute