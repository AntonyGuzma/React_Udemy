
const Previsao = ({ previsoes }) => {
 
    return (
    <div>
         <h4>Previsão para as próximas horas</h4>
         <ul>
            {previsoes.map((previsao) => (
                <li key={previsao.dt}>
                    <img
                    src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                    alt={previsao.weather[0].description}
                    />
                    {previsao.main.temp}°C - {previsao.weather[0].description}
                </li>
            ))}
         </ul>
    </div>
  );
};

export default Previsao;
