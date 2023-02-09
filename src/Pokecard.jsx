import React, { Component } from "react";


const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

class Pokecard extends Component {

	render() {
		let imgSrc = `${POKE_API}${this.props.idPost}.png`
		return (
			<div className='Pokecard'>
				🍀 This Component Pokecard.jsx
				<h1 className="Pokecard-title">Pokemon</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.namePost} />
				</div>
				<div className="Pokecard-data"> Name: {this.props.namePost}</div>
				<div className="Pokecard-data"> Type: {this.props.typePost}</div>
				{/* <div className="Pokecard-data2"> Exp: {this.props.base_experience}</div> */}
				<div className="Pokecard-data"> Exp: {this.props.expPost}</div>
				{/* type={p.type} exp={p.base_experience} */}
			</div>
			// Cardsss
		)
	}
}

export default Pokecard