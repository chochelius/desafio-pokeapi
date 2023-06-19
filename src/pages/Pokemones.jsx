import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';

const Pokemones = () => {
  const navigate = useNavigate();
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState('');
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  useEffect(() => {
    if (data) {
      setPokemones(data.results);
    }
  }, [data]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (name) => {
    if (name !== '') {
      navigate(`/pokemon/${name}`);
      setSearch('');
    }
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className='container mt-5'>
      <div className="row mt-5 justify-items-center">
        <div className="col-md-4">
          <form>
            <div className="form-groupmt-5 justify-items-center">
              <label className='mt-5 ' htmlFor="pokemon">Selecciona Un Pokemon</label>
              <select
                className="form-control"
                id="pokemon"
                value={search}
                onChange={handleChange}
              >
                <option>Elige un pokemon</option>
                {pokemones.map((pokemon) => (
                  <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleClick(search)}
              disabled={search === 'Elige un pokemon'}
            >
              Ver detalles
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pokemones;