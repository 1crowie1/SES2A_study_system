  
import React, { useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebase from 'firebase';

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

// const [accessRead, setAccessRead] = useState();
// function readData(){
//     const user = firebase.auth().currentUser;
//     const db = firebase.firestore();
//     db.collection("users").doc(user.uid)
//     .onSnapshot((doc) => {
//       setAccessRead(doc.data().access)});
//   }

//   setTimeout(() => {  readData(); }, 700);
//   const user = firebase.auth().currentUser;
//   const db = firebase.firestore();
//   db.collection("users").doc(user.uid)
//     .onSnapshot((doc) => {
//         if (doc.data().access == true) {
//             // console.log(res.user)
//             // props.history.push("/AdminHome");
//             return (
//                 <Route
//                   {...rest}
//                   render={routeProps =>
//                     !!currentUser ? (
//                       <RouteComponent {...routeProps} />
//                     ) : (
//                       <Redirect to={"/"} />
//                     )
//                   }
//                 />
//               );
//         } else {
//             console.log('invalid account access')
//             alert('invalid account access')
//             return (
//                 <Route
//                   {...rest}
//                   render={routeProps =>
//                     !!currentUser ? (
//                       <RouteComponent {...routeProps} />
//                     ) : (
//                       <Redirect to={"/"} />
//                     )
//                   }
//                 />
//               );
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