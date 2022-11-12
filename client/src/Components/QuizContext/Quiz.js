import React, { useContext } from "react";
import { QuizContent } from "./QuizContext";


const Quiz = () => {
// By declaring it this way will have access to quizState in any components. 
// If console.log(quizState) will be an empty object. Makes it easier to support.
    const [quizState, dispatch] = useContext(QuizContent)
    console.log('quizState', quizState);
    return ( 
        <div>
            <h1>Quiz</h1>
        </div>
     );
}
 
export default Quiz;