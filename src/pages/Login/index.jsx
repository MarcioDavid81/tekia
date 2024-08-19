/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { db } from '../../firebaseConnection'
import { StyledLogin } from "./styles";
import { Button } from "../../components/Usuals/Button";



function Login() {
  return (
    <>
        <Header />
            <Container>
              <StyledLogin>
                <Title>Login</Title>
                <input type="email" placeholder="Email..." />
                <input type="password" placeholder="Senha..." />
                <Button>Entrar</Button>
                <p>Ainda não tem uma conta?</p>
                <Link to="/cadastro">Cadastre-se agora</Link>
              </StyledLogin>
            </Container>
        <Footer />
    </>
  );
}

export default Login;