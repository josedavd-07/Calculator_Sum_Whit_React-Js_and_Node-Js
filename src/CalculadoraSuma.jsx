import React, { useState } from 'react';
import './styles/CalculadoraSuma.css';

/**
 * Componente CalculadoraSuma
 * Permite a los usuarios ingresar dos números y calcular su suma.
 */
export const CalculadoraSuma = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    /**
     * Maneja el cambio en el input del primer número.
     * @param {Object} e - Evento de cambio del input.
     */
    const handleInputNumero1 = (e) => {
        setNumero1(Number(e.target.value));
    };

    /**
     * Maneja el cambio en el input del segundo número.
     * @param {Object} e - Evento de cambio del input.
     */
    const handleInputNumero2 = (e) => {
        setNumero2(Number(e.target.value));
    };

    /**
     * Limpia el valor del input si es 0 cuando recibe el foco.
     * @param {Object} e - Evento de foco del input.
     */
    const handleFocus = (e) => {
        if (e.target.value === '0') {
            e.target.value = '';
        }
    };

    /**
     * Calcula la suma de los dos números y actualiza el estado del resultado.
     */
    const sumar = () => {
        setResultado(numero1 + numero2);
    };

    /**
     * Resetea los valores de los inputs y el resultado.
     */
    const resetear = () => {
        setNumero1(0);
        setNumero2(0);
        setResultado(0);
    };

    return (
        <>
            <h1 className="titulo-calculadora-suma">Calculadora de Suma:</h1>
            <input
                className="input-numero"
                type="number"
                value={numero1}
                onChange={handleInputNumero1}
                onFocus={handleFocus}
            />
            <input
                className="input-numero"
                type="number"
                value={numero2}
                onChange={handleInputNumero2}
                onFocus={handleFocus}
            /> <br />
            <button className="boton-sumar" onClick={sumar}>Sumar</button>
            <button className="boton-reset" onClick={resetear}>Resetear</button>
            <h2 className="resultado-suma">Resultado: {resultado}</h2>
            <footer class="ajustar-footer">
                <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};