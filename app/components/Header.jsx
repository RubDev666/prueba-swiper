'use client'

const Header = () => {
    const toggle = () => {
        document.querySelector('.fondo-opacity').classList.toggle('show');
        document.querySelector('#sidemenu').classList.toggle('show-navbar');
    }

    const scrollActive = () => {
        const sections = document.querySelectorAll('section[id]');

        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

            if(sectionId === 'shadow-host-companion') return;

            const sectionClass = document.querySelector('#sidemenu a[href*=' + sectionId + ']');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionClass.classList.add('active');
            } else {
                sectionClass.classList.remove('active');
            }
        })
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', scrollActive); //evento scroll
    }

    return (
        <div id="header">
            <div className="fondo-opacity"></div>

            <nav className="centrado">
                <a href="#main" className="logo"><span>Rub</span>Developer</a>

                <ul id="sidemenu">
                    <i className="fas fa-times btn-close" onClick={toggle}></i>
                    <li><a href="#main" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <p className="footer-aside">Copyrigth © <span className="year">{new Date().getFullYear()}</span>. <span className="remarcar-rojo">Rub</span><span className="remarcar">Developer</span></p>
                </ul>

                <i className="fas fa-bars btn-open" onClick={toggle}></i>
            </nav>
        </div>
    )
}

export default Header