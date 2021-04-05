import React, { useEffect, useState } from "react";
import { Card } from "../component/card";
import { getCharacter } from '../apiFetch';
import Error from "./_error";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState();
  const [errorCode, setErrorCode] = useState(false);
  const url = "https://swapi.dev/api/people/";

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const fetchCharacters = (url) => {
    getCharacter(url)
      .then((response) => {
        let temp_characters = characters;
        response.data.results.map(result => {
          temp_characters.push(result);
        });
        
        //Set the characters
        setCharacters(temp_characters);

        //Set the value of next to know when no more items can be requested
        setNext(response.data.next);

      })
      .catch((error) => {
          setErrorCode({
          status: error.response.status,
          message: error.response.statusText
        });
      });
  };

  const getMoreCharacters = () => {
    if (next !== null) {
      fetchCharacters(next);
    }
  }

  const goToDetails = (e, character) => {
    //Save the selected character in sessionStorage and redirect to character-details page
    e.stopPropagation();
    sessionStorage.setItem("character", JSON.stringify(character));
    window.location = `/characterDetails?name=${character.name}`;
  }
  
  if (errorCode) {
    return <Error statusCode={errorCode} />
  } else {
    return (
      <div className="w-full bg-stars min-h-full h-auto sm:p-5 md:p-10 lg:p-20">
        <div className="bg-black">
          <div className="pl-6 pt-2 pb-2 border-t-2 border-b-2 border-gray-500 bg-black text-white-100 text-lg tracking-wider uppercase">Star Wars Characters</div>
            <div className="flex flex-wrap text-white-100">
              {
                characters ? 
                characters.map((character, i) => (
                  <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5">
                    <Card character={character} goToDetails={goToDetails} />
                  </div>
                ))
                :
                null
              }
            </div>
          <div className="w-full justify-center items-center flex pt-5 pb-5 border-t-2 border-gray-500">
            {
              next !== null && next !== undefined
              ?  
              <div className="disable text-gray-600 text-lg tracking-wider uppercase cursor-pointer hover:text-white-100 hover:underline" onClick={() => getMoreCharacters()}>Load more</div>
              :
              ""
            }
          </div>
        </div>
      </div>  
    )
  }  
}

export default Characters;