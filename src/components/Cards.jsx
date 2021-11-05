import Card from "./Card"

function Cards({ tourLs, onDeleteTour }) {
    return (
        <div className="cards">
            {tourLs.map(tour => <Card key={tour.id} tour={tour} onDeleteTour={onDeleteTour} />)}
        </div>
    );
}

export default Cards;