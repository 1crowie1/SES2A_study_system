import React, { useContext } from 'react';
import {AuthContext} from './firebaseAuthContext';
import {Route,Redirect} from 'react-router-dom';

export default function ProtectedRoute(props){
   
    const authValue = useContext(AuthContext)
    if (authValue.userDataPresent){
        if(authValue.user == null){
            return(<Redirect to={props.redirectTo}></Redirect>)
        }
        else{
            return(
            
            <Route exact path={props.path}>
                {props.children}

            </Route>)
        }
    }
    else{
        
        return null
    }
}