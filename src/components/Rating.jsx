import React from "react";

const Rating = ({ value, color, size = "24px", onRatingChange }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          style={{ color, fontSize: size, cursor: "pointer" }}
          className={
            value >= i
              ? "fas fa-star"
              : value >= i - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
          onClick={() => onRatingChange(i)}
        ></i>,
      );
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Rating;
