import Button from "./Button"

function Card({ tour, onDeleteTour }) {
    return (
        <div className="card">
            <div>
                <img className="cardimage" src={tour.image} alt="" />
            </div>
            <div>
                <h2>{tour.name}</h2>
                <p>{tour.price}</p>
                <p>{tour.info}</p>
                <Button onDeleteTour={onDeleteTour} tId={tour.id} />
            </div>
        </div>
    );
}

export default Card;