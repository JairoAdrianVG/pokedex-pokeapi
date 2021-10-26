import React from "react";

const Pokemon = (props) => {
    const pokemon = props.pokemon;
    return (
        <div className='pokemon-card'>
            <div className='pokemon-img-container'>
                <img src={pokemon.sprites.front_default} alt= {pokemon.name} className='pokemon-img'/>
            </div>
            <div className='card-body'>
                <div className='card-header'>
                    <div className='poke_id'>#{pokemon.id}</div>
                    <h3>{pokemon.name}</h3>
                </div>
                <div className='poke-type'>
                    <div>{pokemon.types.map((type, index) => {
                        return <div key={index}>{type.type.name}</div>
                    })}
                    </div>
                <div className='poke-data'>
                    <div key={pokemon}>Weight: {pokemon.weight}Kg</div>
                    <div>Height: {pokemon.height}Mts</div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Pokemon;