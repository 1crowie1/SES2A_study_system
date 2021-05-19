import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./AdminClassManagement.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import firebase from "firebase";
import {AutoSort, RandSort} from "../../../../Sort/student_sort.js";

// Using history in props for routing to different components
const AdminClassManagement = (props) => {

  const db = firebase.firestore();

  var studentClass = [];

  async function createStudentArray() {
    return new Promise((resolve, reject) => {
    var studentArray = [];
      db.collection("users").get().then((funct) => {
        funct.forEach((doc) => {
          studentArray.push([doc.data().name,
          doc.data().access,
          [doc.data().course, doc.data().major],
          [doc.data().topics[0], doc.data().topics[1], doc.data().topics[2]],
          [doc.data().availability[0], doc.data().availability[1], doc.data().availability[2], doc.data().availability[3], doc.data().availability[4], doc.data().availability[5], doc.data().availability[6]]]);
        });
      });
      setTimeout(() => {resolve(studentArray)}, 1000);
    })
  }

  // once below is done... add reading groups from the database to reading all the students above ^^

  async function runAutoSort() {
    studentClass = await createStudentArray();
    var groups = AutoSort(studentClass, 3);

    var inGroup = false;
    var i, n;
    var notInGroup = [];
    for (i = 0; i<studentClass.length; i++) {
      for (n = 0; n<groups.length; n++) {
        if (groups[n].includes(i)) {
          inGroup = true;
        }
      }
      if (inGroup == false) {
        notInGroup.push(i);
      }
      inGroup = false;
    }

    for (n = 0; n<groups.length; n++) {
      var name = [];
      db.collection("groups").doc(n + '').set({studentName: 'hi'}, {merge: true});
      for (i = 0; i<groups[n].length; i++) {
        if (groups[n][i] > -1) {
          name.push(-1);
        }
      }
      db.collection("groups").doc(n + '').set({ studentName: name}, {merge: true});
    }

    for (n = 0; n<groups.length; n++) {
      var name = [];
      db.collection("groups").doc(n + '').set({studentName: 'hi'}, {merge: true});
      for (i = 0; i<groups[n].length; i++) {
        if (groups[n][i] > -1) {
          name.push(studentClass[groups[n][i]][0]);
        }
      }
      db.collection("groups").doc(n + '').set({ studentName: name}, {merge: true});
    }
  }


  async function runRandomSort() {
    studentClass = await createStudentArray();
    var groups = RandSort(studentClass, 5);

    var inGroup = false;
    var i, n;
    var notInGroup = [];
    for (i = 0; i<studentClass.length; i++) {
      for (n = 0; n<groups.length; n++) {
        if (groups[n].includes(i)) {
          inGroup = true;
        }
      }
      if (inGroup == false) {
        notInGroup.push(i);
      }
      inGroup = false;

      for (n = 0; n<groups.length; n++) {
        var name = [];
        db.collection("groups").doc(n + '').set({studentName: 'hi'}, {merge: true});
        for (i = 0; i<groups[n].length; i++) {
          if (groups[n][i] > -1) {
            name.push(-1);
          }
        }
        db.collection("groups").doc(n + '').set({ studentName: name}, {merge: true});
      }
  
      for (n = 0; n<groups.length; n++) {
        var name = [];
        db.collection("groups").doc(n + '').set({studentName: 'hi'}, {merge: true});
        for (i = 0; i<groups[n].length; i++) {
          if (groups[n][i] > -1) {
            name.push(studentClass[groups[n][i]][0]);
          }
        }
        db.collection("groups").doc(n + '').set({ studentName: name}, {merge: true});
      }
    }
  }

  async function listStudents() {
    studentClass = await createStudentArray();
    var i;
    for (i = 0; i<studentClass.length; i++) {
      var li = document.createElement("li");
      var inputValue = studentClass[i][0] + " - " + studentClass[i][2][0];
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("studentUL").appendChild(li);
    }
  }

  async function listgroups() {
    studentClass = await createStudentArray();

  }

  listStudents();
  runAutoSort();


return (
  <React.Fragment>
    {/* Contains classes for a course */}
    {/* Directed from a selected course */}
  <div class="single-class">
    <div className="heading">
      <h1>Admin Dashboard</h1>
      <div className="button-container">
        {/* <Button>Requests</Button> */}
      </div>
    </div>
    <hr />
    <div className="class-view-container">
      <div className="participants-container">
        <div className="admin-container">
          <h2>Session: 2021</h2>
          <hr/>
          <div className="listview">
            {/* Lists admin users related to the class */}
          </div>
        </div>
        <div className="student-container">
          <h2>Students</h2>
          <hr/>
          <div className="listview-container">
            <div className="listview">
              {/* Lists student users related to the class */}
              <ul id="studentUL"></ul>
            </div>
          </div>
        </div>
      </div>

      <div className="groups-container">
        <div className="heading">
          <h2>Groups</h2>
          <div className="button-container">
            <Button className="edit-btn" onClick={() => runAutoSort()}>Automatic</Button>
            <Button className="add-btn " onClick={() => runRandomSort()}>Random</Button>
          </div>
        </div>
        <hr/>
        <div className="listview">
          {/* Lists groups created by admin users for this class */}
          <ul id="unallocatedStudentUL"></ul>
          <ul id="groupUL"></ul>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
);
};

// Wrapping Navbar in a withRouter function in order to give it access to
// this.props.history to redirect the user to the different components
export default withRouter(AdminClassManagement);
