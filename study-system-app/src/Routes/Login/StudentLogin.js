//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
//Import LoginForm component
import LoginForm from "./components/LoginForm";
import LoginNavBar from "./components/LoginNavBar";

function StudentLogin() {

    return (
        <div className="Login">
            <Helmet>
                <title>GroupMe | Student Login</title>
            </Helmet>
            <LoginNavBar/>
            <LoginForm/>

        </div>
    );
}

export default StudentLogin;
