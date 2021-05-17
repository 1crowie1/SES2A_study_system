import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import AdminNavBar from "../../Admin/components/AdminNavBar";
import AllRequests from "./components/AllRequests";

function RequestsInbox() {

  return (
      <div className="Classes">
        <Helmet>
          <title>Requests | GroupMe</title>
        </Helmet>
        <AdminNavBar/>
        <AllRequests/>

      </div>
  );
}

export default RequestsInbox;
