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
            <div>
                <img className="cardimage" src={tour.image} alt="" />
            </div>
            <div>
                <h2>{tour.name}</h2>
                <p>{tour.price}</p>
                <p>
                    {readmore ? tour.info : tour.info.split(' ').slice(0, 30).join(' ')}
                    {!readmore && ' ... '}
                    <span onClick={toggleRead} className="readmore">{readmore ? 'Readless' : 'Read More'}</span>
                </p>
                <div className="div-btn">
                    <Button onDeleteTour={onDeleteTour} tId={tour.id} />
                </div>
            </div>
        </div>
    );
}

export default Card;