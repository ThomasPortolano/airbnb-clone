import React from 'react'
import Star from './star.png'


export default function Cards(props){
    console.log(props.card)
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-seats">{badgeText}</div>}
            <img className="card-visual" src={"./public/images/" + props.card.coverImg} alt={props.card.title} />
            <div className="card-text">
                <div className="card-details">
                    <div className="card-stats">
                        <img className="red-star" src={Star} alt="star rating " />
                        <span>{props.card.stats.rating}</span>
                        <span> ({props.card.stats.reviewCount}) • </span>
                        <span className="location">{props.card.location}</span>
                    </div>
                    <h2 className="card-title">{props.card.title}</h2>
                    <div className="total-price"><span className="price-from">From ${props.card.price}</span> / person</div>
                </div>
            </div>
        </div>    
    )
}