import React, { useEffect, useState } from "react";
import { Card } from "../component/card";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState();
  const url = "https://swapi.dev/api/people/";

  useEffect(() => {
    fetchRequest(url);
  }, []);

  async function fetchRequest(url) {
    try {
      // Fetch request and parse as JSON
      const response = await fetch(url);
      let data = await response.json();

      let temp_characters = characters;
      data.results.map(result => {
        temp_characters.push(result);
      });

      //Set the characters
      setCharacters(temp_characters);

      //Set the value of next to know when no more items can be requested
      setNext(data.next)

      return temp_characters;
    } catch (err) {
      return console.error(err);
    }
  }

  const getMoreCharacters = () => {
    if (next !== null) {
      fetchRequest(next);
    }
  }

  const goToDetails = (e, character) => {
    //Save the selected character in sessionStorage and redirect to character-details page
    e.stopPropagation();
    sessionStorage.setItem("character", JSON.stringify(character));
    window.location = `/character-details?name=${character.name}`;
  }

  const getCharacters = () => {
    return (
      <>
      <div className="flex flex-wrap text-white-100">
      {
        characters ? 
        characters.map((character, key) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5">
            <Card character={character} key={key} goToDetails={goToDetails} />
          </div>
        ))
        :
        null
      }
    </div>
    </>
    )
  }
  
  return (
    <div className="bg-stars">
      <div className="bg-black sm:m-5 md:m-10 lg:m-20 pt-2">
        <div className="pl-6 pt-2 pb-2 border-t-2 border-b-2 border-gray-500 bg-black text-white-100 text-lg tracking-wider uppercase">Start Wars Characters</div>
        {getCharacters()}
        <div className="w-full justify-center items-center flex pt-5 pb-5 border-t-2 border-gray-500">
          <div className="text-gray-600 text-lg tracking-wider uppercase cursor-pointer hover:text-white-100 hover:underline" onClick={() => getMoreCharacters()}>Load more</div>
        </div>
      </div>
    </div>  
  )
}

// // This function gets called at build time
// export async function getStaticProps(url) {
//   // Call an external API endpoint to get characters
//   // const res = await fetch("https://swapi.dev/api/people/");
//   // const characters = await res.json();

//   // return {
//   //   props: {
//   //       characters,
//   //   },
//   // }

//   try {
//     // Fetch request and parse as JSON
//     const response = await fetch(url);
//     let characters = await response.json();

//     // If another page exists, merge it into the array
//     // Else return the complete array of paginated output
//     if (next) {
//       let temp_data = await getStaticProps(next_page); 
//       characters = characters.concat(temp_data);
//     }

//     // return data;
//     return {
//       props: {
//           characters,
//       },
//     }
//   } catch (err) {
//     return console.error(err);
//   }
// }

export default Characters;