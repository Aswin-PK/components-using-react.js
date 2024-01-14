import { useState } from 'react'
import './style.css'

// eslint-disable-next-line react/prop-types
export default function RatingSelection({noOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getIndex) =>{
        setRating(getIndex);
    }
    const handleMouseEnter = (getIndex) =>{
        setHover(getIndex);
    }
    const handleMouseLeave = () =>{
        setHover(rating)
    }


    return <div className="rating-container">
        <div className="wrapper">
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <div 
                    className={`star ${index <= (hover || rating) ? 'active': 'inactive'}`} 
                    key={index} 
                    onClick={()=>handleClick(index)} 
                    onMouseEnter={()=>handleMouseEnter(index)} 
                    onMouseLeave={()=>handleMouseLeave()}
                    ></div>
                    )
            })
        }
        </div>
    </div>
}