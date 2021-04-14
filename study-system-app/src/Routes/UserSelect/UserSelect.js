import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import UserSelectForm from "./components/UserSelectForm";

function UserSelect(){
    return (
        <div className="UserSelect">
            <Helmet>
                <title>GroupMe | User Selection</title>
            </Helmet>
            <UserSelectForm/>
        </div>

    );
}
export default UserSelect;
