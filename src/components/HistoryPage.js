import styled from "styled-components"
import Footer from "./Footer"
import TopBar from "./TopBar"

export default function HistoryPage() {
    return (
        <div>
            <TopBar />
            <HistoryPageContainer>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryPageContainer>
            <Footer />
        </div>
    )
}

const HistoryPageContainer = styled.div`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    gap: 20px;
    padding: 22px 18px;

    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;

    h1 {
        font-size: 23px;
        color: #126BA5;
        font-family: "Lexend Deca", sans-serif;
    }

    p {
        font-size: 18px;
        color: #666666;
        font-family: "Lexend Deca", sans-serif;
    }

`
