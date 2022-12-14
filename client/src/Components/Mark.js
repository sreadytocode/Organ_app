import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border: solid purple;
    border-width: 1px;
    align-content: center;
    
`
const Mark = ({quiz, mark}) => {

    return ( 
        <>
            <Container>
                <h2>You scored {mark} out of {quiz.length}</h2>
            </Container>
        </>
     );
}
 
export default Mark;