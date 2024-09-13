import { StyleFooter } from "./styles";

function Footer() {

    const ano = new Date().getFullYear();


    return (
        <StyleFooter>
            <div className="container">
                <div className="copy">
                    <p>&copy; {ano} - Todos os direitos reservados</p>
                </div>
                <div className="developer">
                    <p>Powered by | <a href="https://futurodev-marcio.netlify.app/" target="_blank">Marcio David - Web Developer</a></p>
                </div>
            </div>


        </StyleFooter>
    );
}

export default Footer;