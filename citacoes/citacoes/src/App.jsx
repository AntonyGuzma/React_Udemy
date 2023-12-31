import Citacao from "./components/Citacao"
import citacoes from "./data"
import { useState } from "react"

function App() {

  const [indice, setIndice] = useState(0)

  // passar para a proxima citação e o resto é o calculo para não ultrapassar o numero maximo de citações
  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length)
  }

  return (
    <div className="container mt-5">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
     <button onClick={proximaCitacao} className="btn btn-success">Próxima Citação</button>
    </div>
  )
}

export default App
