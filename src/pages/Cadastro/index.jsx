/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Title } from "../../components/Usuals/Title";
import Container from "../../components/Container";
import { StyledCadastro } from "./styles";
import { Button } from "../../components/Usuals/Button";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConnection";



function Cadastro() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function register() {
    await createUserWithEmailAndPassword(auth, email, senha)

    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      setEmail("");
      setSenha("");
    })
    .catch((error) => {
      alert("Erro ao cadastrar usuário: " + error.message);
    })

  }

  return (
    <>
        <Header />
            <Container>
              <StyledCadastro onSubmit={register}>
                <Title>Cadastro</Title>
                <p>Dados Pessoais</p>
                <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail (e.target.value)} required />
                <input type="password" placeholder="Senha..." value={senha} onChange={(e) => setSenha (e.target.value)} required />
                <Button type="submit">
                  Cadastrar
                </Button>
              </StyledCadastro>
            </Container>
        <Footer />
    </>
  );
}

export default Cadastro;