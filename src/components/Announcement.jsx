import styled from "styled-components"

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
        // aligns vertically
    justify-content: center;
        // aligns horizontally
    font-size: 14px;
    font-weight: 500;
    `

const Announcement = () => {
    return (
        <Container>
            Buy 3, get 1 free!
        </Container>
    )
}

export default Announcement
