import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import Footer from "./Footer";
import HabitsContainer from "./HabitsContainer";
import TopBar from "./TopBar";


export default function HabitsPage() {

    const { currentUser } = useContext(UserContext);


    return (
        <div>
            {currentUser?.email && <TopBar />}
            {currentUser?.email && <HabitsContainer />}
            {currentUser?.email && <Footer />}
        </div>
    );
}