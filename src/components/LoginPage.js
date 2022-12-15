import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BigLogo from "./BigLogo";
import Input from "./Input";

export default function LoginPage({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        const body = { email, password };
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        request.then(response => {
            setToken(response.data.token);
            navigate("/habitos");
        });
        request.catch(() => {
            alert("Email ou senha incorretos");
        });
    }

    return (
        <Container>
            <BigLogo />
            <StyledForm onSubmit={login}>
                <Input 
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required    
                />
                <Input 
                    type="password" 
                    placeholder="senha" 
                    alue={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                />
                <StyledButton type="submit">Entrar</StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
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