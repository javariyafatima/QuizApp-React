import { useState } from 'react';
import './App.css';

import Options from './View/Option/Option';


function App  ()  {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const NextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const RestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  const getPercentage = () => {
    return ((score / quizData.length) * 100);
  };

  const getGrade = () => {
    const percentage = getPercentage();
    if (percentage >= 90) {
      return "A";
    } else if (percentage >= 80) {
      return "B";
    } else if (percentage >= 70) {
      return "C";
    } else if (percentage >= 60) {
      return "D";
    } else {
      return "Fail";
    }
  };

  const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home tool Markup Language","Hyperlink Markup languahge", "Hypertext Markup languahge"],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "How add  shadow use CSS?",
      options: ["font: shadowed 5px 5px 5px grey", "font-shadow: 5px 5px 5px grey;", "text-shadow: 5px 5px 5px grey;", "shadow: text 5px 5px 5px grey;"],
      answer: "text-shadow: 5px 5px 5px grey;",
    },
    {
      question: "What does RGBa mean?",
      options: ["Red Green Blue Alpa", "Red Gray Brown Alpa", "Red Gold Black Alpa", "Rewie Get Back information"],
      answer: "Red Gray Brown Alpa",
    },
    {
      question: "HTML is type of language?",
      options: ["Scripting Language", "Programing Language", "Network Protocol", "Other Language"],
      answer: "Scripting Language",
    },
    {
      question: "CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", " Computer Style Sheets", "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    
    },
              
  ];




      
  return (
    <div className="App">
          
       <header className="App-header">
        <h1 id='head'>QUIZ APP</h1>
        
        <div className="quiz-contaner">
      {currentQuestion < quizData.length ? (
        <div>
           
          <h2 id='h2'> {currentQuestion+1}:{quizData[currentQuestion].question}</h2>
    <Options
      options={quizData[currentQuestion].options}
      selectedOption={setSelectedOption}
    />
    <button  onClick={NextQuestion}>Next</button>
  </div>
  ) : (
    <div>
      <h2 id='h2'>Your Score: {score}/{quizData.length}</h2>
      <h2 id='h2'>Percentage: {getPercentage()}%</h2>
      <h2 id='h2'>Grade: {getGrade()}</h2>
      <button onClick={RestartQuiz}>Restart</button>
    </div>
  )}
  </div>
  </header>
</div>
);
};

export default App;
      
      
          
        
            
              
          
          
    
 

