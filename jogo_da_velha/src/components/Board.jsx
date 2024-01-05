import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {   

  const [isNext, setIsNext] = useState(true)  

     // criando um state onde é preenchidos com arrays nulos 
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [aiThinking, setaiThinking] = useState(false)
  const winner = calculateWinner(squares)  

  const handleClick = (i) => {

    if(squares[i] || winner || aiThinking) return

    // pegando os quadrados em uma variavel para n utilizar diretamente
    const newSquares = squares.slice();

    //preencher onde o jopgador clicou 
    newSquares[i] = isNext ? "X" : "O";

    //preenchendo a array 
    setSquares(newSquares);
    setIsNext(!isNext)
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setIsNext(true)
  }

  //atualizar o jogo 
  useEffect(() => {
    
    if(!isNext && !winner){


      setaiThinking(true)
      setTimeout(() => {
        aiMove(squares, setSquares, setIsNext)

        setaiThinking(false)
      }, 1000)
    }
    
  }, [isNext,squares,winner])

    return (
        <div>
            <div className="status">
                Status: {winner ?(<p className="winner">O Vencedor é: {winner} </p> 
                ): (
                `Próximo a Jogar: ${isNext ? "X" : "O"}`
                )}
            </div>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
            <button className="reset-button" onClick={() => resetGame()}>Reiniciar Jogo</button>
        </div>
    );
    
};

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         // console.log(squares[a], squares[b], squares[c])
        return squares[a];
      }
      
    }

    return null;
  };

  const aiMove = (squares, setSquares, setIsNext) =>{
    
    let move = null;

    for(let i =0; i< squares.length; i++){
      if(!squares[i]) {
        move = i;
        break
      }
    }

    // pegando os quadrados em uma variavel para n utilizar diretamente
    const newSquares = squares.slice();

    //preencher onde o jopgador clicou 
    newSquares[move] = "O";

    //preenchendo a array 
    setSquares(newSquares);
    setIsNext(true)
  } 

export default Board;
