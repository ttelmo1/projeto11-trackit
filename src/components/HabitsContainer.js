import { useState } from "react";
import styled from "styled-components"
import HabitForm from "./HabitForm"
import HabitListed from "./HabitListed";

export default function HabitsContainer() {

    const [habits, setHabits] = useState([]);
    

    const [formOpen , setFormOpen] = useState(false);



    return (
        <Container>
            <Header>
                <h2>Meus hábitos</h2>
                <button onClick={() => setFormOpen(true)}>+</button>
            </Header>
            {formOpen && <HabitForm setFormOpen={setFormOpen}/> }
            {habits.length <= 0 ?  
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : 
                <HabitListed habits={habits} setHabits={setHabits} />
            }
        </Container>
    )
}

const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    min-height: calc(100vh - 140px);
    background-color: #e5e5e5;
    padding: 22px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    & > p {
        color: #666666;
        font-size: 18px;

        font-family: 'Lexend Deca', sans-serif;
    }
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;

    h2{
        font-size: 23px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #fff;

        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        
        border: none;
    }
`