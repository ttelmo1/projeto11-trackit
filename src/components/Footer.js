import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer(){
    return(
        <StyledFooter>
            <Link to = "/habitos">Hábitos</Link>
            <ProgressBar>
                <CircularProgressbarWithChildren
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        strokeLinecap: "round",
                    })}
                    value = {66}
                >
                    <Link to="/hoje">Hoje</Link>
                </CircularProgressbarWithChildren>
            </ProgressBar>
            <Link to = "/habitos">Histórico</Link>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    width: 100%;
    max-width: 370px;
    height: 70px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    a {
        text-decoration: none;
        color: #52B6FF;
        padding : 0 90px;
    }

    font-family: 'Lexend Deca';
`

const ProgressBar = styled.div`
    width: 91px;
    height: 91px;
    color: #fff;
    position: absolute;
    top: -35px;

    a{
        color : #fff;
    }
`