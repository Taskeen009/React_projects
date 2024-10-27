import { useState } from 'react';
import './style.css';
import { FaStar } from 'react-icons/fa';

const Rating = (props) => {
    const noOfStars = props.noOfStars || 5;

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0); // Consistent naming

    const handleClick = (currentIndex) => {
        console.log(currentIndex);
        setRating(currentIndex);
    };

    const mouseEnter = (currentIndex) => {
        console.log(currentIndex);
        setHover(currentIndex);
    };

    const mouseLeave = () => {
        setHover(rating); // Reset hover to the current rating
    };

    return (
        <div className='star-Rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    const starIndex = index + 1; // 1-based index for stars
                    return (
                        <FaStar
                            key={starIndex}
                            className={(starIndex <= hover || starIndex <= rating) ? "gold" : "pink"}
                            onClick={() => handleClick(starIndex)}
                            onMouseLeave={mouseLeave}
                            onMouseEnter={() => mouseEnter(starIndex)} // Use mouseEnter instead of mouseMove
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
};

export default Rating;
