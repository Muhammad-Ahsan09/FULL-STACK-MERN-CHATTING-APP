
import Sidebar from "./Sidebar";
import MessageContainer from "./messages/MessageContainer";

const Homepage = () => {

    
    return <div className="home-page-container">
        <div>
        <Sidebar/>
        </div>
        <MessageContainer/>
    </div>
}

export default Homepage;