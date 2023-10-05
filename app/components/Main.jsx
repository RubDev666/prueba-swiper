'use client'

import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        const contenedor = document.querySelector('.main-container');
        const holaReveal = document.querySelector('.hola-reveal');
        const nameReveal = document.querySelector('.name-reveal');
        const oficioReveal = document.querySelector('.oficio-reveal');
        const textoReveal = document.querySelector('.texto-reveal');
        const btnReveal = document.querySelector('.btn-reveal');

        contenedor.style.opacity = '1';
        holaReveal.style.top = '0';
        oficioReveal.style.left = '0';
        textoReveal.style.right = '0';
        btnReveal.style.bottom = '0';

        setInterval(() => {
            nameReveal.style.opacity = '1';
        }, 1100)
    })

    return (
        <section id="main">
            <div className="main-container opacidad centrado">
                <div className="presentacion">
                    <h1 className="hola-reveal">Hola, Soy <span className="name-reveal">RUBEN</span></h1>
                    <h2 className="oficio-reveal">programador | desarrollador web</h2>
                    <h4 className="texto-reveal">Me llamo Ruben, y soy un apasionado por el mundo de la programacion, disfruto mucho de escribir codigo y
                        practicar, pero sobre todo aprender y seguir creciendo como un profesional en este mundo.</h4>
                    <div className="btn-reveal">
                        <a href="#" className="btn btn-presentacion">Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main