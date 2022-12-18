import { useContext } from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import { HabitsContext } from "../Providers/HabitsProvider";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


export default function TodayPage(){
    const { todayHabits } = useContext(HabitsContext);

    const totalHabits = todayHabits.length;
    const doneHabits = todayHabits.filter((habit) => habit.done).length;
    const percentage = (doneHabits/totalHabits)*100;


    let now = dayjs().locale('pt-br').format('dddd, DD/MM');

    return (
        <TodayContainer>
            <TopBar />
            <HeaderContainer>
                <h2>{now}</h2>
                <p
                    style = {{color: totalHabits === 0 ? '#BABABA' : '#8FC549'}}
                >{totalHabits === 0 ? 'Nenhum hábito concluído ainda' : `${percentage.toFixed(0)}% dos hábitos concluídos`}</p>
            </HeaderContainer>
            <HabitContainer>
                {todayHabits.map((todayHabit, index) => <TodayHabit todayHabit={todayHabit} key={index} />)}
            </HabitContainer>
            <Footer/>
        </TodayContainer>
    );
}

const TodayContainer = styled.div`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    gap: 20px;
    padding: 22px 18px;

    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    padding: 28px 18px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > h2 {
        font-size: 23px;
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
    }


    & > p {
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
    }

`

const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap : 10px;
`
