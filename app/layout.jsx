import './globals.css';
import '../public/styles/main.css';
import '../public/styles/footer.css';

import FondoEsfera from "./components/FondoEsfera";
import Header from './components/Header';
import Footer from './components/Footer';

import Script from 'next/script';

export const metadata = {
    title: 'RubDev',
    description: 'Este mi pagina web oficial y portafolio laboral, con mi informacion personal de contacto',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <FondoEsfera />

                <Header />

                {children}

                <Footer />

                <Script src="https://kit.fontawesome.com/c4254e24a8.js" />
            </body>
        </html>
    )
}
