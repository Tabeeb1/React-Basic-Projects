import "./Down.css"

export default function Down(props) {
    return (
       <div className="left">
            <p className="down-word">{props.data.description}</p>
            <hr/>
            <img className="down-image" src={props.data.img} alt="image" width="150px" height="150px" />
            <p className="down-word-2">{props.data.data}</p>

        </div> 
    )
}