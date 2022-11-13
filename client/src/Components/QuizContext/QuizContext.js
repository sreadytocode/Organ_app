import { createContext, useEffect, useReducer, useState } from "react";
import {getOrgans, postOrgans} from '../OrgansService.js'
import Test from '../Test.js'
// createContext global object can use in all components rather than props. Has parent and child
// relationships.

const questions = []
const initialState = {questions};
    

// This way will always get state and action assigned
const reducer = (state, action) => {
    return state;
};

// QuizProvider is a component. Children is the application.
export const QuizProvider = ({children, organs}) => {
     function addOrganToState () {
        
            return questions.push(organs) 
            
        } 
            
        addOrganToState();

    // Assigned a variable with hook useReducer. Inside value will have two things:
    // 1. Global state can access throughout app
    // 2. Our equivalent of useState.
    const value = useReducer(reducer, initialState)
    // For return of QuizContent.Provider component, inside should be stored the children
    // which is the application. Then a value that has been assigned.
    return <QuizContent.Provider value={value}>{children}</QuizContent.Provider>
}
// QuizContent is content provider. 
export const QuizContent = createContext();