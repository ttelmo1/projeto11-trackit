import { useContext } from "react"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { HabitsContext } from "../Providers/HabitsProvider"

export default function Footer(){

    const {todayHabits} = useContext(HabitsContext);

    const totalHabits = todayHabits.length;
    const doneHabits = todayHabits.filter((habit) => habit.done).length;
    const percentage = (doneHabits/totalHabits)*100;




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
                    value = {totalHabits === 0 ? 0 : percentage}
                >
                    <Link to="/hoje">Hoje</Link>
                </CircularProgressbarWithChildren>
            </ProgressBar>
            <Link to = "/historico">Histórico</Link>
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