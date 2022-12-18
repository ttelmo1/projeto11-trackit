import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { UserContext } from "../Providers/UserProvider";
import HabitForm from "./HabitForm"
import HabitListed from "./HabitListed";

export default function HabitsContainer() {
    const [hasHabitExcluded, setHasHabitExcluded] = useState(false);
    const [habits, setHabits] = useState([]);
    const { currentUser: { token } } = useContext(UserContext);
    const [formOpen , setFormOpen] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then(response => {
            setHabits(response.data);
        })
        request.catch(error => {
            alert(error.response.data.message);
        })
    }, [hasHabitExcluded])


    return (
        <Container>
            <Header>
                <h2>Meus hábitos</h2>
                <button 
                onClick={() => setFormOpen(true)}
                data-test="habit-create-btn"
                >+</button>
            </Header>
            {formOpen && <HabitForm setFormOpen={setFormOpen} setHasHabitExcluded={setHasHabitExcluded} /> }
            {habits?.length <= 0 ?  
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : 
                habits.map( habit => <HabitListed habit={habit} habits={habits} setHabits={setHabits} setHasHabitExcluded={setHasHabitExcluded} key={habit}  />) 
            }
        </Container>
    );
}

const Container = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;
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