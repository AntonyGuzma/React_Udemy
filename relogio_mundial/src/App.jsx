import { useState, useEffect } from 'react'
import './App.css'
import TimeZoneClock from "./components/TimeZoneClock.jsx";

function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusoHoariosSelecionados, setfusoHoariosSelecionados] = useState([fusoLocal])

  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusoHoariosSelecionados.includes(novoFuso)) {
      setfusoHoariosSelecionados([...fusoHoariosSelecionados, novoFuso]);
    }
  }

  return (
    <div>
      <h1>Relogio Mundial</h1>
      <select  onChange={adicionarFusoHorario}>
        <option value="" disabled select>Selecione o fuso horário</option>
         {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>{fuso}</option>
         ))}
      </select>

      <div>
        {fusoHoariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>  
    </div>
  )
}

export default App
