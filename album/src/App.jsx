import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar'
import FotoList from  './components/FotoList'
import FotoAmpliada from  './components/FotoAmpliada'
import axios from "axios";

function App() {

  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fotos, setFotos] = useState([])
 
  // Fazendo uma requisição fetch de uma API
  const fetchData = async ({query, categoria}) => {

    //recebendo a chave
    const apiKey = import.meta.env.VITE_UNSPLAH_API_KEY

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      }
    })

    setFotos(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData(query, categoria)
  }, [])


  return (
    <div className='container'>
      <SearchBar/>
      <FotoList fotos={fotos}/>
      <FotoAmpliada/>
    </div>
  )
}

export default App
