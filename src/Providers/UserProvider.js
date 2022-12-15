import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
        image: "",
        token: "",
    });

    const login = async (loginInfo) => {
        try {
            const {data : {name, email, image, token}} = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginInfo);
            setCurrentUser({name, email, image, token});
            return true;
        } catch (error) {
            alert(error.response.data.message);
            return false;
        }
    };
    
    return (
        <UserContext.Provider value={{ currentUser, login}}>
            {children}
        </UserContext.Provider>
    );

    }