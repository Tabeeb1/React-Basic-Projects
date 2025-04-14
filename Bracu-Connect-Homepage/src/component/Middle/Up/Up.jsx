import "./Up.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function Up(){
    return(
        <div>
            <div className="up">
                <p className="student-word">Student</p>
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search.."/>
                    <FontAwesomeIcon className="bell" icon={faBell} size="lg" color="#333" />
                    <img className="profile-pic" src="../../../public/picture.png" alt="profile" width="50px" height = "50px"/>
                </div>
            </div>
            <hr/>
            <div className="up-2">
                <p className="dashboard-word">Dashboard</p>
                <button className="configure-button">Configure Dashboard</button>
            </div>
            <hr/>
        </div>

    )
}