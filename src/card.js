import React from "react";
const Card = (props) => {
  return (
    <>
      <div className={props.className}>
        <img
          src={props.carte.image}
          alt="perso"
          onClick={() => props.changeliste(props.carte)}
          className="img-card img-fluid bg-image hover-zoom cursor-pointer "
        />
        <p className="title-card pt-1">{props.carte.nom}</p>
      </div>
    </>
  );
};
export default Card;
