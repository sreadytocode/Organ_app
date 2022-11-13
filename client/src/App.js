import Quiz from './Components/QuizContext/Quiz.js';
import {getOrgans, postOrgans} from './Components/OrgansService.js'
import './App.css';
import React, {useState, useEffect} from 'react';
import { QuizProvider } from './Components/QuizContext/QuizContext.js';
import Test from './Components/Test.js';

function App() {

  const [organs, setOrgans] = useState([]);

  useEffect(() => {
    getOrgans()
    .then((data) => {
        setOrgans(data[0]['Brain']['quiz']) 
    })

  }, []) 
    
  

  return (
    <div className="App">
      <Test organs = {organs}/>
      <QuizProvider organs ={organs}>
        <Quiz organs={organs}/>
      </QuizProvider>
    </div>
  );
}

export default App;
