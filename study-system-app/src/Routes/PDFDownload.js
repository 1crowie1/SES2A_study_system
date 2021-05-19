import React, { useState } from 'react';
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import firebase from 'firebase';
import StudentNavBar from "./StudentHome/components/StudentNavBar";

 function PDFDownload(props) {
     console.log('Load Daat')

    var userData = [];

    function loadData() {
        const user = firebase.auth().currentUser;
        const db = firebase.firestore;
        db.collection("users").doc(user.uid).onSnapshot((doc) => {
            userData.push({
                name: doc.data().name,
                email: doc.data().email,
                access: doc.data().access,
                availability: doc.data().availability,
                course: doc.data().course,
                major: doc.data().major,
                topics: doc.data().topics,
            });
        });
        console.log(userData);
    }

    setTimeout(() => {  loadData(); }, 700);

    return (
        <div className="Classes">
            <Helmet>
            <title>Groupme | Dashboard </title>
            </Helmet>
            <StudentNavBar/>
        
        <React.Fragment>
            <div>
                <h1>
                    Export Running
                </h1>

                <h2>
                    Export ID : {userData.name}
                </h2>
            </div>
        </React.Fragment> 

        </div>
    )
}


export default PDFDownload;
