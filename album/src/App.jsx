import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import FotoList from  './components/FotoList'
import FotoAmpliada from './components/fotoAmpliada';
import axios from "axios";

function App() {

  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fotos, setFotos] = useState([])
  const [fotoAmpliada, setFotoAmpliada] = useState(null)
  const [activateSearch, setactivateSearch] = useState(false)
 
  // Fazendo uma requisição fetch de uma API
  const fetchData = async ({query, categoria}) => {

    //recebendo a chave
    const apiKey = import.meta.env.VITE_UNSPLAH_API_KEY

    if (query || categoria) {
      let searchQuery = query;

      // Combina query com categoria se ambas existirem
      if (query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: searchQuery,
              client_id: apiKey,
            },
          }
        );
        if (response.status === 200 && response.data && response.data.results) {
          setFotos(response.data.results);
        }
      } catch (error) {
        console.error("Ocorreu um erro ao buscar as fotos: ", error);
      }
      return;
    }

    // Se não tiver nem query nem categoria, busca fotos aleatórias
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random`,
        {
          params: {
            client_id: apiKey,
            count: 10,
          },
        }
      );
      if (response.status === 200 && response.data) {
        setFotos(response.data);
        console.log(response.data)
      }
    } catch (error) {
      // Pode ocorrer da API exceder limite de consulta 
      console.error("Ocorreu um erro ao buscar as fotos aleatórias: ", error);
    }

  }

  useEffect(() => {
    fetchData(query, categoria)
  }, [])

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, categoria });
      setactivateSearch(false); // Reset após a busca
    }
  }, [activateSearch]);

 
  return (
    <div className='container'>
      {/* Utilizando props para mandar valores */}
      <SearchBar setQuery={setQuery} setCategoria={setCategoria} setactivateSearch={setactivateSearch}/>
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
      {/* Condição para exibir a foto Ampliada */}
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  )
}

export default App
