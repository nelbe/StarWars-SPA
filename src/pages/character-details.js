
import React, { useState, useEffect } from "react";
import Router from 'next/router'

function CharactersDetails() {
    const [character, setCharacter] = useState(true);
    
    useEffect(() => {
        setCharacter(JSON.parse(sessionStorage.getItem('character')));
    }, []);

    return (
        <div>
            <div onClick={() => Router.back()}>Go Back</div>
            <div><span className="text-4xl">{character.name}</span></div>
        </div>
    )
}
  
export default CharactersDetails;


