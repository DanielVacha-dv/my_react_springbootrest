import React from "react"

function Card({employer}) {
    return (
        <div className="Card">
            <div className="Card__types">
            </div>
            <div className="Card__info">
                <p>id: {employer.id}</p>
                <p>name: {employer.name}</p>
                <p>age: {employer.age}</p>
            </div>
        </div>
    );
}

export default Card;
