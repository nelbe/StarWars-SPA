
import React, { useState, useEffect } from "react";
import Router from 'next/router'

function CharactersDetails() {
    const [character, setCharacter] = useState();
    
    useEffect(() => {
        setCharacter(JSON.parse(sessionStorage.getItem('character')));
    }, []);

    const getFilms = () => {
        return (
            <>
            <ol className="text-white-100 list-disc list-inside">
                {character && character.films.length  ? 
                    character.films.map((film, i) => (
                        <li className="mb-2" key={i} id={i}>{film}</li>
                    ))
                :  null
            }
            </ol>
        </>
        )
    }

    return (
        <div className="w-full bg-stars min-h-full h-auto p-5 sm:p-5 md:p-10 lg:p-20">
            <div className="ml-5 text-gray-600 text-lg tracking-wider uppercase cursor-pointer hover:text-white-100 hover:underline" onClick={() => Router.back()}>Back to main list</div>
            {
            character ? 
                <div className="bg-black">
                    <div className="m-5 mb-5 pt-5 border-t-2 border-gray-500">
                        <span className="text-4xl text-white-100">{character.name}</span>
                    </div>
                    <div className="text-white-100 m-5 p-5 bg-gray-900 bg-repeat-x bg-7 bg-bgCard border rounded-md shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Heigth:</span>{character.height}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Gender:</span>{character.gender}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Mass:</span>{character.mass}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Hais color:</span>{character.hair_color}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Eye color:</span>{character.eye_color}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Skin color:</span>{character.skin_color}</div>
                        <div className="p-5 justify-center items-center flex"><span className="text-red-150 mr-2">Birth year:</span>{character.birth_year}</div>
                    </div>
                    <div className="m-5 mb-5 border-b-2 border-gray-500">
                        <div className="text-2xl mb-2 text-yellow-350">{character.films.length === 1 ? `${character.films.length} Film` : `${character.films.length} Films`}</div>
                        <div className="pb-5">{getFilms()}</div>
                    </div>
                </div>    
            : null
            }
        </div>
    )
}
  
export default CharactersDetails;


