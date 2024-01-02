import React from "react";

const SearchBar = ({setQuery, setCategoria, setactivateSearch}) => {

    const categorias = ["natureza", "Pessoas", "Tecnologia", "Esportes"]

    return <div className="search-bar">
        <input type="text" placeholder="Pesquisar Fotos..." onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={() => setactivateSearch(true)}>Pesquisar</button>
        <select onChange={(e) => {setCategoria(e.target.value); setactivateSearch(true)}}>
            {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    </div>
}

export default SearchBar;