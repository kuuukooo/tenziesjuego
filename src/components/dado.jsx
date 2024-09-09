import React from 'react';
import '../App.css';

export default function Dado(props) {
    const estilos = { backgroundColor: props.esGuardado ? '#59E391' : 'white' };

    function handleClick() {
        props.retenerDado();
        props.playBeep();  
    }

    return (
        <div 
            className={`dado--cara ${props.hayError ? 'temblor' : ''}`} // Aplicar clase temblor si hayError es true
            style={estilos}
            onClick={handleClick}
        >
            <h2 className="dado--num">{props.valor}</h2>
        </div>
    );
}
