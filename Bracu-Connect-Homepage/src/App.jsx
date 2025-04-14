import Sidebar from "./component/SideBar/Sidebar";
import "./App.css"
import Middle from "./component/Middle/Middle";

export default function App() {
  return (
    <div className="app">
        <Sidebar/>
        <Middle/>
    </div>
  )
}