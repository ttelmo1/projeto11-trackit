import Input from "./Input"
import { WEEKDAYS } from "../constants"
import styled from "styled-components"
import { useContext, useState } from "react"
import { UserContext } from "../Providers/UserProvider";
import axios from "axios"

export default function HabitForm(props) {
    const {setFormOpen, setHasHabitExcluded} = props;
    const { currentUser: { token } } = useContext(UserContext);
    const [habit, setHabit] = useState({ name: "", days: [] });
   
    function clickCheckbox(a) {
        const selected = habit.days.includes(a);
        if (selected) {
            setHabit({ ...habit, days: habit.days.filter(b => b !== a) })
        }
        else {
            setHabit({ ...habit, days: [...habit.days, a] })

        }
    }

   

    async function saveHabit (habit) {
        if(habit.days.length === 0){
            alert("Selecione pelo menos um dia da semana")
            return;
        }
        try{
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habit, config);
            setFormOpen(false); 
            setHasHabitExcluded(prev => !prev)

        } catch (error) {
            alert(error.response.data.message);
        }  
    }


    async function submitHabit(e) {
        e.preventDefault();
        await saveHabit(habit);
            
    }

    return (
        <StyledHabitForm 
        onSubmit={submitHabit}
        data-test="habit-create-container"
        >
            <Input
                data-test="habit-name-input"
                type="text"
                placeholder="nome do hábito"
                value={habit.name}
                onChange={e => setHabit({ ...habit, name: e.target.value })}
                required
            />
            <StyledWeekdayList>
                {WEEKDAYS.map((a, i) =>
                    <StyledWeekdaysBox
                        data-test="habit-day"
                        selected={habit.days.includes(i)}
                        onClick={() => clickCheckbox(i)}
                        key={i}
                    >
                        {a}</StyledWeekdaysBox>)}
            </StyledWeekdayList>
            <ButtonDiv>
                <p className="cancel" onClick={() => setFormOpen(false)} data-test="habit-create-cancel-btn">Cancelar</p>
                <button type="submit" className="save" data-test="habit-create-save-btn">Salvar</button>
            </ButtonDiv>
        </StyledHabitForm>
    )
}

const StyledHabitForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 18px;

    
`


const StyledWeekdayList = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
`

const StyledWeekdaysBox = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Lexend Deca", sans-serif;

    cursor: pointer;
    border: 1px solid #D5D5D5;

    font-size: 20px;

    color: ${props => props.selected ? "#fff" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#CFCFCF" : "#fff"};

`

const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
    margin-top: 29px;

    .cancel {
        font-family: "Lexend Deca", sans-serif;
        font-size: 16px;
        color: #52B6FF;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .save {
        cursor: pointer;
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #fff;

        font-family: "lexend Deca", sans-serif;
        font-size: 16px;
        border: none;
    }
`