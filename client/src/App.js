import Quiz from './Components/QuizContext/Quiz.js';
import './App.css';
import { QuizProvider } from './Components/QuizContext/QuizContext.js';


function App() {


  return (
    <div className="App">
      <QuizProvider>
        <Quiz/>
      </QuizProvider>
    </div>
  );
}

export default App;
