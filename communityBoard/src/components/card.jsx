import React  from "react";
import './card.css';

const Card = ({title, image,description,link}) => {
    return (
        <div className="card">
            <img src={image} alt="title" />
            <h3>{title}</h3>
            <h5>
                {description}
            </h5>
            <a href= {link} target="_blank" rel= {title} >
                <button >
                    View
                </button>
            </a>
            
        </div>

    );
};

export default Card;