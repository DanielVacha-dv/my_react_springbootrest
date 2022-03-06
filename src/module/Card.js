import React from "react"
import "../css/Card.css";

function Card({employer}) {
    return (
        <div className="Card">
            <div className="Card__types">Type
            </div>
            <div className="Card__info"> Info
                <div>id: {employer.id}</div>
                <div>name: {employer.name}</div>
                <div>age: {employer.age}</div>
            </div>
            <button>Edit</button>
        </div>
    );
}

export default Card;
