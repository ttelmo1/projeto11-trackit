import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";



export const HabitsContext = createContext({
    todayHabits: [],
    checkHabit: () => { },
    uncheckHabit: () => { },
    setAllHabitsChanged: (prev) => { }
});


export default function HabitsProvider({ children }){
    const { currentUser : { token } } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const [allHabitsChanged, setAllHabitsChanged] = useState(true);

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    async function checkHabit(id) {
        try{
            await axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
            setAllHabitsChanged(!allHabitsChanged);
        }
        catch(error){
            alert(error.response.data.message);
        }

    }

    async function uncheckHabit(id) {
        try{
            await axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
            setAllHabitsChanged(!allHabitsChanged);
        }
        catch(error){
            alert(error.response.data.message);
        }
    }


    useEffect(() => {
        if(!token) return;

        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        request.then((response) => {
            setTodayHabits(response.data);
        });
        request.catch((error) => {
            alert(error.response.data.message);
        });
    }, [allHabitsChanged, token]);


    return (
        <HabitsContext.Provider value={{ todayHabits, checkHabit, uncheckHabit, setAllHabitsChanged }}>
            {children}
        </HabitsContext.Provider>
    );
};