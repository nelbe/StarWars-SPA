
function Characters({ characters }) {
  return (
    <ul>
        {characters.results.map((character, key) => (
        <li className="text-4xl text-red-400 bg-gray-800 p-4 text-center" key={key}>{character.name}</li>
        ))}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get characters
  const res = await fetch('https://swapi.dev/api/people/')
  const characters = await res.json()

  return {
    props: {
        characters,
    },
  }
}

export default Characters;