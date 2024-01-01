import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import fotoList from './components/fotoList'
import fotoAmpliada from './components/fotoAmpliada'
import axios from "axios";

function App() {

  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
 
  // Fazendo uma requisição fetch de uma API
  const fetchData = async ({query, categoria}) => {

    //recebendo a chave
    const apiKey = import.meta.env.VITE_UNSPLAH_API_KEY

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey
      }
    })
    console.log(response)
  }

  useEffect(() => {
    fetchData(query, categoria)
  }, [])

  return (
    <div className='container'>
      <SearchBar/>
      <fotoList/>
      <fotoAmpliada/>
    </div>
  )
}

export default App
