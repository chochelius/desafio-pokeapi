import React from 'react';
import './Card.css';


const Card = ({ pokemon }) => {
  const { name, sprites, types, abilities, height, weight } = pokemon;

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src={sprites?.front_default} alt={name} className='card-img-top' />
            </div>
            <div className='col-12 col-md-6'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>Altura: {height}</p>
              <p className='card-text'>Peso: {weight}</p>
              <p className='card-text'>
                Habilidades:{' '}
                {abilities &&
                  abilities.map((ability, index) => {
                    return <span key={index}>{ability.ability.name} </span>;
                  })}
              </p>
              <p className='card-text'>
                Tipo:{' '}
                {types &&
                  types.map((type, index) => {
                    return <span key={index}>{type.type.name} </span>;
                  })}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;
