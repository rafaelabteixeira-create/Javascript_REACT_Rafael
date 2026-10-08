function Cards ({name, attack, type}){
    return(
        <li className = "card">
        <p>{name}</p>
        <p>{attack}</p>
        <p>{type}</p>
        {attack >= 6 && <span>Obeso</span>}
        </li>
    )
}

export default Cards;