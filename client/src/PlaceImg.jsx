import React from "react";

const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place?.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover bg-red-100";
  }

  return (
    <img
      className={className}
      src={"https://airbnb-0gu1.onrender.com/uploads/" + place?.photos[index]}
      alt=""
    />
  );
};

export default PlaceImg;
