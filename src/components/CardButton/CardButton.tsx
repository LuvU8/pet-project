import React from "react";
import "../../App.css";

interface CardButtonProps {
  label: string;
  color: "basic" | "clicked";
  size: "small" | "medium" | "large";
}

const CardButton = ({ label, size, color}: CardButtonProps) => {
  return (
    <button
      className={`card-button  card-button--${size} card-button--${color}`}
      onClick={() => {
        console.log("clicked");
      }}
    >
      {label}
    </button>
  );
};

export default CardButton;
