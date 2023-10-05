'use client'

import { useEffect } from "react";

const FondoEsfera = () => {
    useEffect(() => {
        const esfera = document.querySelector('.pelota');

        setTimeout(() => {
            esfera.style.opacity = '1';
        }, 2000)
    })

    return (
        <div className="fondo">
            <div className="rampa">
                <div className="pelota"></div>
            </div>
            <div className="circle-blur"></div>
        </div>
    )
}

export default FondoEsfera;