import { React, useEffect, useState } from 'react';
import './App.css';
import Dado from './components/dado';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import celebracion from './assets/sound/celebracion.mp3';
import beep from './assets/sound/beep.mp3';
import roll from './assets/sound/roll.mp3';
import error from './assets/sound/error.mp3';

export default function App(props) {

  const [dado, setDado] = useState(() => {
    const savedDado = localStorage.getItem('dado');
    return savedDado ? JSON.parse(savedDado) : nuevosDados();
  });

  const [dieces, setDieces] = useState(false);
  const [hayError, setHayError] = useState(false);

  const [playCelebracion] = useSound(celebracion, { volume: 0.3 });
  const [playBeep] = useSound(beep, { volume: 0.3 });
  const [playRoll] = useSound(roll, { volume: 0.3 });
  const [playError] = useSound(error, { volume: 0.3 });

  useEffect(() => {
    verificarVictoria();
    localStorage.setItem('dado', JSON.stringify(dado));
  }, [dado]);

  function verificarVictoria() {
    const todosGuardados = dado.every(die => die.esGuardado);
    const primerValor = dado[0].valor;
    const todosMismoValor = dado.every(dado => dado.valor === primerValor);

    if (todosGuardados && todosMismoValor) {
      setDieces(true);
      playCelebracion();
      console.log('¡Ganaste!');
    }
  }

  function generarNuevoDado() {
    return {
      valor: Math.ceil(Math.random() * 6),
      esGuardado: false,
      id: nanoid()
    };
  }

  function nuevosDados() {
    const nuevodado = [];
    for (let i = 0; i < 10; i++) {
      nuevodado.push(generarNuevoDado());
    }
    return nuevodado;
  }

  function tirarDados() {
    const dadosGuardados = dado.filter(die => die.esGuardado);
    const primerValor = dadosGuardados[0]?.valor;
    const todosMismoValor = dadosGuardados.every(die => die.valor === primerValor);

    if (dadosGuardados.length > 0 && !todosMismoValor) {
      // Si los valores no coinciden, reproducir sonido de error y aplicar animación de temblor
      setHayError(true);
      playError();
    } else {
      setHayError(false);
      setDado(prevdado =>
        prevdado.map(die => {
          return die.esGuardado ? die : generarNuevoDado();
        })
      );
      playRoll();
    }
  }

  function nuevoJuego() {
    const nuevosDadosGenerados = nuevosDados();
    setDado(nuevosDadosGenerados);
    setDieces(false);
    setHayError(false);
    localStorage.setItem('dado', JSON.stringify(nuevosDadosGenerados));
  }

  function retenerDado(id) {
    setDado(prevdado =>
      prevdado.map(die => {
        if (die.id === id) {
          return {
            ...die,
            esGuardado: !die.esGuardado
          };
        }
        return die;
      })
    );
  }

  const dadoElements = dado.map(die => (
    <Dado
      key={die.id}
      valor={die.valor}
      esGuardado={die.esGuardado}
      playBeep={playBeep}
      retenerDado={() => retenerDado(die.id)}
      hayError={hayError && die.esGuardado}  // Aplicar animación si hay error
    />
  ));

  return (
    <div>
      {dieces && <Confetti />}
      <div className='dieces--wrapper'>
        <main className='dieces--main'>
          {dieces ? 
            <h1 className="dieces--titulo">¡Ganaste!</h1>
          :
            <h1 className="dieces--titulo">Dieces</h1>
          }
          {dieces ?
            <p className="dieces--instrucciones">¡Felicidades! Todos los dados tienen el mismo valor :D</p>
          :
            <p className="dieces--instrucciones">Tira los dados hasta que todos tengan los mismos valores. Haz click en cada dado para congelar su número entre tiradas.</p>
          }
          <div className='dieces--dado--contenedor'>
            {dadoElements}
            <div className='dieces--button-contenedor'>
              {dieces ?
              <button
                className='dieces--boton hover__press'
                onClick={nuevoJuego}
              >
                ¿Jugar de Nuevo?</button>
              :
              <button
                className="dieces--boton hover__press"
                onClick={tirarDados}
              >
                ¡Tirar Dados!
              </button>
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
