import Busca from "./Components/Busca"
import ClimaAtual from "./Components/ClimaAtual"
import { Titulo } from "./AppStyle"
import { useState, useEffect } from "react"
import axios from 'axios'
import Previsao from "./Components/Previsao"

function App() {

  const [cidade, setCidade] = useState("")
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const api = import.meta.env.VITE_API_KEY || ""

  const buscarClima = async () => {
    // Pegando uma api e reformulando a rota de busca repassando outros pametros
    try{
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api}&units=metric&lang=pt_br`)
      setClima(respostaClima.data)

      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${api}&units=metric&lang=pt_br`)
      
      setClima(respostaClima.data)
      setPrevisao(respostaPrevisao.data.list.slice(0, 5))
    }
    catch(error){
      console.log(error)
    }
  }

  console.log(clima)
  console.log(previsao)
  return (
      <div>
        <Titulo>Condições Climáticas</Titulo>
        <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
        {/* Condição para aparecer o clima na Tela */}
        {clima && <ClimaAtual clima={clima}/>}
        {previsao.length > 0 && <Previsao previsoes={previsao}/>}
      </div>
  )
}

export default App
