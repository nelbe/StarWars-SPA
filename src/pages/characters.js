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

      // let characters = data.results;

      let temp_characters = characters;

      data.results.map(result => {
        temp_characters.push(result);
      });

      setCharacters(temp_characters);
      setNext(data.next)

      // If another page exists, merge it into the array
      // Else return the complete array of paginated output
      // if (data.next) {
      //   let temp_data = await getStaticProps(data.next); 
      //   // data = data.add(temp_data);
      //   // data = [...data, ...temp_data];
      //   temp_data.results.map(result => {
      //     characters.push(result);
      //     console.log(result);
      //   })
      // }
      return temp_characters;
    } catch (err) {
      return console.error(err);
    }
  }

  const getMoreCharacters = () => {
    if (next !== null) {
      console.log(next);
      fetchRequest(next);
      
      // setCharacters(temp_characters);
      
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
      <div className="flex flex-wrap">
      {
        characters ? 
        characters.map((character, key) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5"><Card character={character} key={key} goToDetails={goToDetails} /></div>
        ))
        :
        null
      }
    </div>
    <button onClick={() => getMoreCharacters()}>See more</button>
    </>
    )
  }
  
  return (
    <>
      <div className="pl-5 pt-5">Start Wars Characters</div>
      <div>{getCharacters()}</div>
    </>  
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