import React from "react";

const SearchBar = () => {

    const categorias = ["natureza", "Pessoas", "Tecnologia", "Esportes"]

    return <div className="search-bar">
        <input type="text" placeholder="Pesquisar Fotos..."/>
        <button>Pesquisar</button>
        <select>
            {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    </div>
}

export default SearchBar;