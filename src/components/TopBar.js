import { useContext } from "react";
import styled from "styled-components"
import { UserContext } from "../Providers/UserProvider";

export default function TopBar() {
    const { currentUser:{image, name} } = useContext(UserContext);

    return (
        <StyledHeader>
            <h1>TrackIt</h1>
            <StyledUserContainer image={image} />
        </StyledHeader>
    )

}

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 18px;

    font-family: 'Playball', sans-serif;
    font-size: 39px;
    color: #fff;

    padding: 0 18px;
`
const StyledUserContainer = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: #fff;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`
