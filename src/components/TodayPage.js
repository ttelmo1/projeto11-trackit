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
    console.log(todayHabits)

    let now = dayjs().locale('pt-br').format('dddd, DD/MM');

    return (
        <TodayContainer>
            <TopBar />
            <HeaderContainer>
                <h2>{now}</h2>
                <p>{todayHabits.length === 0 ? 'Nenhum hábito concluído ainda' : `${60} dos hábitos`}</p>
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
    min-height: calc(100vh - 140px);
    gap: 28px;
    padding: 22px 18px;

    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    padding: 28px 18px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        font-size: 23px;
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
    }


    & > p {
        color: #BABABA;
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
    }

`

const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
`
