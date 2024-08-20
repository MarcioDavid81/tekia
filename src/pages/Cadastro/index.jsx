import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { StyledCadastro } from "./styles";
import { Button } from "../../components/Usuals/Button";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConnection";
import { Link, useNavigate } from "react-router-dom";



function Cadastro() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    if (email !== '' && senha !== '') {
      await createUserWithEmailAndPassword(auth, email, senha)
          .then(() => {
              navigate('/login', { replace: true });
              alert('Cadastro efetuado com sucesso!');
          })
          .catch(() => {
              alert('Email já cadastrado!');
  })
  } else {
      alert('Preencha todos os campos!');
  }

  }

  return (
    <>
        <Header />
            <Container>
              <StyledCadastro onSubmit={register}>

                <Title>Cadastro</Title>

                <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail (e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Senha..."
                  value={senha}
                  onChange={(e) => setSenha (e.target.value)}
                  required
                />

                <Button type="submit">Cadastrar</Button>

                <p>Já tem conta?</p>

                <Link to="/login">Entre agora</Link>

              </StyledCadastro>
            </Container>
        <Footer />
    </>
  );
}

export default Cadastro;