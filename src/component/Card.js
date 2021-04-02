import React from 'react';
import PropTypes from "prop-types";

export const Card = ({ character, goToDetails }) => {
  const createCard = () => {
    return (
      <div className="w-full border rounded-md shadow-lg p-2 bg-gray-900 bg-repeat-x bg-7 bg-bgCard">
        <div className="cursor-pointer mb-5 hover:text-red-150" onClick={(e) => goToDetails(e, character)}>{character.name}</div>
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
    goToDetails: PropTypes.func,
};
