import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

// Pokecard
class Pokedex extends Component {

	render() {
		let title
		if (this.props.isWinner) {
			title = <h2 className="Pokedex-winner">Winning Player</h2>
		} else {
			title = <h2 className="Pokedex-loser">Loser Player</h2>

		}
		return (
			<div className="Pokedex">
				{/* 🍀 This Component Pokedex.jsx */}
				{title}
				<h4>Total Experience:  {this.props.exp} </h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p, index) => (
						<Pokecard key={index} idPost={p.id} namePost={p.name} typePost={p.type} expPost={p.base_experience} />
					))}</div>
			</div>
		)
	}
}

export default Pokedex