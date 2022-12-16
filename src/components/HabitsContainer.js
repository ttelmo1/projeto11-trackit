import styled from "styled-components"

export default function HabitsContainer() {
    return (
        <Container></Container>
    )
}

const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    min-height: calc(100vh - 140px);
    background-color: #e5e5e5;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 20px;

    & > p {
        color: #666666;
        font-size: 18px;
    }
`
