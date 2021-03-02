import React from "react";
const Card = (props) => {
	return (
		<>
			<div className={props.className}>
				<img
					src={props.carte.image}
					alt="perso"
					onClick={() => props.changeliste(props.carte)}
					className="w-100 img-fluid bg-image hover-zoom cursor-pointer "
				/>
				{props.carte.nom}
			</div>
		</>
	);
};
export default Card;
