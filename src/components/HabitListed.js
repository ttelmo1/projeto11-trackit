import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'
import { WEEKDAYS } from "../constants";
import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import axios from "axios";

export default function HabitListed({ habit: { name, days, id }, setHasHabitExcluded }) {

    const { currentUser: { token } } = useContext(UserContext);

    async function deleteHabit() {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        await axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        setHasHabitExcluded(prev => !prev)
    }


    function clickDelete() {
        const confirm = window.confirm("Deseja realmente apagar este hábito?")
        confirm && deleteHabit()
        
    }

    return (
        <StyledHabitListed>
            <StyledHabitInfo>
                <h2>{name}</h2>
                <StyledWeekdayList>
                    {WEEKDAYS.map((day, index) => <StyledWeekdaysBox selected={days.includes(index)} key={index} >{day}</StyledWeekdaysBox> )}
                </StyledWeekdayList>
            </StyledHabitInfo>
            <TrashOutline
                onClick={() => clickDelete()}
                height="15px"
                width="13px"
            />
        </StyledHabitListed>
    )
}

const StyledHabitListed = styled.div`
    width: 100%;
    min-width: 340px;
    border-radius: 5px;
    background-color: #fff;
    padding: 14px;

    display: flex;
    justify-content: space-between;

`
const StyledWeekdayList = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
`

const StyledHabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
        font-family: "Lexend Deca", sans-serif;
    }

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
