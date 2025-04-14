import "./SidebarWord.css"

export default function SidebarWord(props) {
    return (
        <div className="sidebar-word">
            <p className="pretext">{props.data.pretext}</p>
            <p className="context">{props.data.context}</p>
        </div>
    )
}