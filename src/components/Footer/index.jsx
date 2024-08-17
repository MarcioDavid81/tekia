import styled from "styled-components";

function Footer() {

    const Footer = styled.footer`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(90deg, rgba(42,39,92,1) 25%, rgba(137,74,181,1) 90%, rgba(230,21,147,1) 100%);
        color: #fff;
        padding: 5px 0;
        font-size: 0.75rem;

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4%;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;

            a{
                color: #fff;
                text-decoration: none;
                transition: all 0.3s ease;

                &:hover{
                    color: #E61593;
                }
            }
        }

        @media (max-width: 768px){
            p{
                font-size: 0.6rem;
            }
        }

        @media (max-width: 512px){
            p{
                font-size: 0.5rem;
            }
        }
    `;

    return (
        <Footer>
            <div className="container">
                <div className="copy">
                    <p>&copy; 2024 - Todos os direitos reservados</p>
                </div>
                <div className="developer">
                    <p>Powered by | <a href="https://futurodev-marcio.netlify.app/" target="_blank">Marcio David - Web Developer</a></p>
                </div>
            </div>


        </Footer>
    );
}

export default Footer;