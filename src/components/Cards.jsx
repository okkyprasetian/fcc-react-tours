import Card from "./Card"

function Cards({ tourLs }) {
    return (
        <div className="cards">
            {tourLs.map(tour => <Card id={tour.id} tour={tour} />)}
        </div>
    );
}

export default Cards;