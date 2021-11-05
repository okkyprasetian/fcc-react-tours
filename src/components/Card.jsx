import { useState } from "react"
import Button from "./Button"

function Card({ tour, onDeleteTour }) {

    // state
    const [readmore, SetReadmore] = useState(false)

    // Set State
    const toggleRead = () => {
        SetReadmore(!readmore)
    }

    return (
        <div className="card">
            <div className="cardimage" style={{ backgroundImage: `url(${tour.image})`, backgroundPosition: 'center center' }}>
            </div>
            <div className="detail">
                <div className="updetail">
                    <h2>{tour.name}</h2>
                    <p className="price">$ {tour.price}</p>
                </div>
                <p className="info">
                    {readmore ? tour.info : tour.info.slice(0, 200)}
                    {!readmore && '... '}
                    <span onClick={toggleRead} className="readmore">{readmore ? ' Read Less' : 'Read More'}</span>
                </p>
            </div>
            <div className="div-btn">
                <Button onDeleteTour={onDeleteTour} tId={tour.id} />
            </div>
        </div>
    );
}

export default Card;