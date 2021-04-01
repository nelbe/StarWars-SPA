import React from 'react';
import PropTypes from "prop-types";

export const Card = ({ character, goToDetails }) => {
  const createCard = () => {
    return (
      <div className="w-full border rounded-md shadow-lg ring ring-black-600 ring-offset-2 p-2">
        <div className="cursor-pointer" onClick={(e) => goToDetails(e, character)}>{character.name}</div>
        {/* <div>
          <Link
            href={{
              pathname: '/character-details',
              query: { character: JSON.stringify(character) }
            }}
          >
            <a>{character.name}</a>
          </Link>
        </div> */}
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
