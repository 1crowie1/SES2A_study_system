//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import UserSelectForm from "./components/UserSelectForm";

function UserSelectScreen(){
    return (
        <div className="UserSelect">
            <Helmet>
                <title>User Select | GroupMe</title>
            </Helmet>
            <UserSelectForm/>
        </div>

    );
}
export default UserSelectScreen;