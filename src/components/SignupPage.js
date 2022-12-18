import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import BigLogo from "./BigLogo";
import Input from "./Input";

export default function SignupPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    function signup(e) {
        e.preventDefault();
        const body = { email, password, image, name };
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        request.then(response => {
            alert("Cadastro realizado com sucesso");
            navigate("/");
        });
        request.catch(() => {
            alert("Email já cadastrado");
        });
    }

    return (
        <Container>
            <BigLogo />
            <StyledForm onSubmit={signup}>
                <Input 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    data-test="email-input"
                />
                <Input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    data-test="password-input"
                />
                <Input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    data-test="user-name-input"
                />
                <Input
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    required
                    data-test="user-image-input"
                />
                <StyledButton type="submit" data-test="signup-btn">Cadastrar</StyledButton>
            </StyledForm>
            <StyledLink to="/" data-test="login-link">Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )



}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 36px;
`
const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
`
const StyledButton = styled.button`
    background-color: #52B6FF;
    width: 303px;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
`

const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
`