import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card/Card';
import '../components/Card/Card.css'

//Pokemon.jsx:9 {id: 'charmander'}

const Pokemon = () => {
  const params = useParams();
  console.log(params);

  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/' + params.id);

  console.log(data);

  const navigateToPokemons = useNavigate('/pokemones');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>
      <div className='mt-5'>
      <h1 className='mt-5'>
      Error: {error.message}
      </h1>
      </div>
    </div>;
  }

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-12 mt-5 align">
          <Card pokemon={data} 
            //css classes from Card.css
            className='card mb-3 mt-5 align'
            
          />
          <div className="container me-auto mt-2 text-center">
          <button
            className="btn btn-primary mx-auto "
            onClick={() => navigateToPokemons()}
          >
            Volver
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pokemon;