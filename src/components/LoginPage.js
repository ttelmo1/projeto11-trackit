import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Providers/UserProvider";
import BigLogo from "./BigLogo";
import Input from "./Input";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const submitLogin = async (e) => {
        e.preventDefault();
        // setIsLoading(true);
        const isLogged = await login(loginInfo);
        // setIsLoading(false);
    
        isLogged && navigate('/hoje');
      };

    return (
        <Container>
            <BigLogo />
            <StyledForm onSubmit={submitLogin}>
                <Input 
                    type="email" 
                    placeholder="email" 
                    value={loginInfo.email}
                    onChange={e => setLoginInfo({ ...loginInfo, email: e.target.value })}
                    required    
                    data-test="email-input"
                />
                <Input 
                    type="password" 
                    placeholder="senha" 
                    value={loginInfo.password}
                    onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })} 
                    required
                    data-test="password-input"
                />
                <StyledButton 
                type="submit"
                data-test="login-btn"
                >Entrar</StyledButton>
            </StyledForm>
            <StyledLink 
            to="/cadastro"
            data-test="signup-link"     
            >Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    );

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