import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { StyledLogin } from "./styles";
import { Button } from "../../components/Usuals/Button";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConnection";



function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    if (email !== '' && senha !== '') {
      await signInWithEmailAndPassword(auth, email, senha)
          .then(() => {
            navigate('/', { replace: true });
              alert('Login efetuado com sucesso!');
          })
          .catch(() => {
              alert('Email ou senha incorretos!');
              setEmail('');
              setSenha('');
          });
  } else {
      alert('Preencha todos os campos!');
  }
  }
  
  return (
    <>
        <Header />
            <Container>
              <StyledLogin onSubmit={login}>
                <Title>Login</Title>
                <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail (e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Senha..."
                  value={senha}
                  onChange={(e) => setSenha (e.target.value)}
                />
                <Button type="submit">Entrar</Button>
                <p>Ainda não tem uma conta?</p>
                <Link to="/cadastro">Cadastre-se agora</Link>
              </StyledLogin>
            </Container>
        <Footer />
    </>
  );
}

export default Login;