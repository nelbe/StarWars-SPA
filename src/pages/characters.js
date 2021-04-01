import { Card } from "../component/card";

function Characters({ characters }) {

  const goToDetails = (e, character) => {
    //Save the selected character in sessionStorage and redirect to character-details page
    e.stopPropagation();
    sessionStorage.setItem("character", JSON.stringify(character));
    window.location = `/character-details?name=${character.name}`;
  }

  const getCharacters = () => {
    return (
      <div className="flex flex-wrap">
      {
        characters.results.map((character, key) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5"><Card character={character} key={key} goToDetails={goToDetails} /></div>
        ))
      }
    </div>
    )
  }
  
  return (
    <>
      <div className="pl-5 pt-5">Start Wars Characters</div>
      <div>{getCharacters()}</div>
    </>  
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get characters
  const res = await fetch("https://swapi.dev/api/people/");
  const characters = await res.json();

  return {
    props: {
        characters,
    },
  }
}

export default Characters;