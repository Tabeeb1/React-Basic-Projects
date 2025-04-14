import "./Sidebar.css";
import SidebarWord from "./SidebarWord";
import LeftSideData from "../../leftSideData";

export default function Sidebar() {
    const elementsSidebar = LeftSideData.map((data) => {
        return (
          <SidebarWord
            data = {data}
          />
        )
      })
    return (
      <>
        <div className="sidebar">
            <div className="logo-slm">
                <img className="bracu-logo" src="../../public/logo.png" alt="bracu-logo" />
                <p className="slm"><span className="s-slm">S</span>tudent <span className="l-slm">L</span>ifecycle <span className="m-slm">M</span>anagement</p>
            </div>
            <div className="sidebar-word-whole">
              {elementsSidebar}
            </div>
        </div>
      </>
        
    )
}