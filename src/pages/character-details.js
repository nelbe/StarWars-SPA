
import React, { useState, useEffect } from "react";

function CharactersDetails() {
    const [character, setCharacter] = useState(true);
    
    useEffect(() => {
        setCharacter(JSON.parse(sessionStorage.getItem('character')));
    }, []);

    return (
        <div>
            <div><span className="text-4xl">{character.name}</span></div>
        </div>
    )
}
  
export default CharactersDetails;


