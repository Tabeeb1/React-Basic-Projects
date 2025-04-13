import "../index.css"

export default function Main(props) {
    return (
        <article className="journal-entry">
            <div className="img-container">
                <img 
                    className="journal-img"
                    src={props.data.img.src} 
                    alt={props.data.img.alt} 
                />
            </div>
            <div className="location-container">
                <div className="country-map">
                    <p className="location-name">{props.data.country}</p>
                    <a href={props.data.googleMapsLink} className="location-link">Google Maps Link</a>
                </div>
                <h2 className="location-title">{props.data.title}</h2>
                <h5 className="location-dates">{props.data.dates}</h5>
                <p className="location-text">{props.data.text}</p>
            </div>
        </article>
    )
}