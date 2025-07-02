import React from "react";

const Cards = ({ img, description, link, title,linkTitle }) => {
  return (
    <div class="card">
      <img src={img} class="card-img-top" alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={link} class="btn btn-primary">
          {linkTitle}
        </a>
      </div>
    </div>
  );
};

export default Cards;
