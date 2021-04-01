import React from 'react';
import PropTypes from "prop-types";

export const Card = ({ character }) => {
  const createCard = () => {
    return (
      <div className="w-full border rounded-md shadow-lg ring ring-black-600 ring-offset-2 p-2">
        <div>{character.name}</div>
        <div className="flex">
          <div className="text-left w-1/2"> {character.films.length === 1 ? `${character.films.length} film` : `${character.films.length} films`}</div>
          <div className="flex text-rigth w-1/2 justify-end"><div>Birth year: {character.birth_year}</div></div>
        </div>
      </div>
    )
  }

  return (
    createCard()
  );
};

Card.propTypes = {
    character: PropTypes.object.isRequired,
};
