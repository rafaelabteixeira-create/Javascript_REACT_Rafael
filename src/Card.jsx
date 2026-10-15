import { useState } from "react";

function Cards ({name, attack, type}){ 
    return(
        
        <li className = "card">
        <p>{name}</p>
        <p><span>Ataque: </span>{attack}</p>
        <p>{type}</p>
        {attack >=6 && <span>Forte</span>}
        <p><button> Coração</button></p>
        </li>
    )
}

export default Cards;