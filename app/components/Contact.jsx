import '@/public/styles/contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container centrado">
                <div className="contactame-contenedor">
                    <h3>Contactame</h3>
                    <h4>Telefono: <br/><span>+52 9999217581</span></h4>
                    <h4>Celular / WhatsApp: <br/><span>+52 9992051494</span></h4>
                    <h4>Correo: <br/><span>rubestrada666@gmail.com</span></h4>
                    <a href="#" className="btn">Descargar CV</a>
                </div>
                <div className="formulario-contenedor">
                <h3>Mandame un correo</h3>
                <form>
                    <input type="text" name="nombre" placeholder="Su Nombre"/>
                    <input type="email" name="correo" placeholder="Su Email"/>
                    <input type="text" name="Asunto" placeholder="Asunto"/>
                    <textarea name="Mensaje" rows="1" placeholder="Su mensaje"></textarea>
                    <button type="submit" className="btn">ENVIAR</button>
                </form>
            </div>
            </div>
        </section>
    )
}

export default Contact