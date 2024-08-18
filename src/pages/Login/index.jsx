import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
        <Header />
            <Container>
                <Title>Login</Title>
                <Link to="/cadastro">Ainda não tem uma conta? Cadastre-se agora</Link>
            </Container>
        <Footer />
    </>
  );
}

export default Login;