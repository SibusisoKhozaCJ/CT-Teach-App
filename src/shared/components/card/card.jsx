import React from "react";

const Card = ({ children, button, ...params }) => {

  return (
    <div className="content-card__container" {...params}>
      {children}
      {button ? (
        <div className={`content-card__btn content-card__btn--${button.classes}`}>
          {button.content}
        </div>
      ) : null}
    </div>
  )
}

export default Card;
