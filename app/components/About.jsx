'use client'

import { useState} from 'react';

import '@/public/styles/about.css';

const About = () => {
    //para el select del about
    const [change, setChange] = useState('skills');

    const aboutChange = (e) => {
        const id = e.target.dataset.id;

        setChange(id);
    }

    return (
        <section id="about">
            <div className="about-container centrado">
                <div className="titulo-btns-contenedor">
                    <h3>ABOUT</h3>
                    <div className="about-info">
                        <div className="btns-about">
                            <button className={`btn-about ${change === 'experience' && 'seleccionado'}`} data-id="experience" onClick={aboutChange}>Experience</button>
                            <button className={`btn-about ${change === 'skills' && 'seleccionado'}`} data-id="skills" onClick={aboutChange}>Skills</button>
                            <button className={`btn-about ${change === 'education' && 'seleccionado'}`} data-id="education" onClick={aboutChange}>Education</button>
                        </div>
                    </div>
                </div>
                <div className="info-about-container">
                    <div className={`about-element skills ${change === 'skills' && 'mostrar-about'}`} id="skills">
                        <div className="lista-habilidades">
                            <h3>Lista de habilidades</h3>
                            <ul>
                                <li>Creacion y diseño de interfaces de usuario</li>
                                <li>React (con Vite y Next)</li>
                                <li>Programacion orientada a objetos y clases</li>
                                <li>Express (API, Fetch, Async Await, CRUD)</li>
                                <li>NoSql con Mongo DB</li>
                                <li>MERN Full Stack</li>
                                <li>Repositorios en Github</li>
                            </ul>
                        </div>
                        <div className="tecnologias">
                            <h3>Tecnologias</h3>
                            <div className="tecnologias-imgs">
                                <div className="img-tecnologia">
                                    <img src="images/html.png" alt="html" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/css.png" alt="css" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/javascript.png" alt="javascript" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/nodejs.png" alt="nodejs" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/reactjs.png" alt="react" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/tailwind.png" alt="tailwind" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/mongodb.png" alt="mongodb" />
                                </div>
                                <div className="img-tecnologia">
                                    <img src="images/github.png" alt="github" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`about-element experience ${change === 'experience' && 'mostrar-about'}`} id="experience">
                        <h3>Mi Experiencia laboral</h3>
                        <ul>
                            <li>Actualmente sin experienca laboral como programador</li>
                        </ul>
                    </div>
                    <div className={`about-element education ${change === 'education' && 'mostrar-about'}`} id="education">
                        <h3>Formacion academica</h3>
                        <ul>
                            <li>HTML5, CSS - <span className="academia-span">autodidacta</span><br /><span>* 2022</span></li>
                            <li>JAVASCRIPT - <span className="academia-span">udemy</span><br /><span>*Certificado - 2022 - 2023</span></li>
                            <li>REACT: Hooks, State, MERN, Next.js, Remix, Vite, Tailwind CSS - <span className="academia-span">udemy</span><br /><span>*Certificado 2023</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About