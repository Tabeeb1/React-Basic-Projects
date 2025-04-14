import Up from "./Up/Up";
import "./Middle.css";
import Down from "./Down/Down";
import MiddleData from "./middlePartData"

export default function Middle() {
    const middleData = MiddleData.map((data) => {
        return(
            <Down
                data = {data}
            />
        )
    })
    return (
        <div className="middle">
            <Up/>
            <div className="middle-2">
                {middleData}
            </div>
        </div>  
    )
}