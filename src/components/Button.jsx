function Button({ onDeleteTour, tId }) {
    return (
        <button className="btn" onClick={() => onDeleteTour(tId)}>
            Not interested
        </button>
    );
}

export default Button;