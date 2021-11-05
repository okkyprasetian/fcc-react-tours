import Button from "./Button"

function Card({ tour }) {
    return (
        <div className="card">
            <div>
                <img className="cardimage" src={tour.image} alt="" />
            </div>
            <div>
                <h2>{tour.name}</h2>
                <p>{tour.price}</p>
                <p>{tour.info}</p>
                <Button />
            </div>
        </div>
    );
}

export default Card;