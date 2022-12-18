import { useContext } from "react";
import { HabitsContext } from "../Providers/HabitsProvider";
import { Checkbox } from "react-ionicons";
import styled from "styled-components";

export default function TodayHabit({todayHabit: { id, name , done , currentSequence, highestSequence }}){

    const { checkHabit, uncheckHabit } = useContext(HabitsContext);

    async function toggleHabit(){
        if(done){
            uncheckHabit(id);
        }
        else{
           checkHabit(id);
        }
    }
    
    return(
        <TodayHabitContainer className="habito">

            <StyledHabitInfo done={done}>
                <h2>{name}</h2>
                <p>Sequência atual: <span>{currentSequence} dias</span></p>
                <p>Seu recorde: <span>{highestSequence} dias</span></p>
            </StyledHabitInfo>
            <Checkbox
                color = {done? "#8FC549" : "#EBEBEB"}
                height = "69px"
                width = "69px"
                onClick = {toggleHabit}
                style = {{cursor: "pointer"}}
            />
        </TodayHabitContainer>
    )


}

const TodayHabitContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    min-width: 340px;
    border-radius: 5px;
`;

const StyledHabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    h2 {
        font-size: 20px;
        font-weight: 400;
        color : #666666;
        font-family: "Lexend Deca", sans-serif;
        margin-bottom: 7px;
    }

    p {
        font-size: 13px;
        color: #666666;
        font-family: "Lexend Deca", sans-serif;
    }


    p > span {
        color: ${props => props.done? "#8FC549" : "#666666"};
    }
`;

