import React, { useEffect, useState } from "react";
import { Card } from "../component/card";
import Error from "./_error";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState();
  const [errorCode, setErrorCode] = useState(false);
  const url = "https://swapi.dev/api/people/";

  useEffect(() => {
    fetchRequest(url);
  }, []);

  async function fetchRequest (url)  {
    await fetch(url)
    .then( async response => {
      let data = null;
      if (response.ok) {
        data = await response.json();
        
        let temp_characters = characters;
        data.results.map(result => {
          temp_characters.push(result);
        });

        //Set the characters
        setCharacters(temp_characters);

        //Set the value of next to know when no more items can be requested
        setNext(data.next)

        return temp_characters;

      // Handle and set errors
      } else if(response.status === 404) {
        setErrorCode({
          status: response.status,
          message: response.statusText !== '' ? response.statusText : 'Not found'
        });
        return response.status;
      } else {
        setErrorCode({
          status: response.status,
          message: response.statusText !== '' ? response.statusText : 'Some other error',
        });
        return response.status;
      }
    })
    .catch(error => {
      setErrorCode({
        status: 500,
        message: error ? error : 'Internal Server Error'
      });
      return error;
    });
  };

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
        characters.map((character, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5">
            <Card character={character} goToDetails={goToDetails} />
          </div>
        ))
        :
        null
      }
      </div>
    </>
    )
  }
  
  if (errorCode) {
    return <Error statusCode={errorCode} />
  } else {
    return (
      <div className="w-full bg-stars min-h-full h-auto sm:p-5 md:p-10 lg:p-20">
        <div className="bg-black">
          <div className="pl-6 pt-2 pb-2 border-t-2 border-b-2 border-gray-500 bg-black text-white-100 text-lg tracking-wider uppercase">Star Wars Characters</div>
          {getCharacters()}
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