import React,{useState, useEffect} from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import Questions from './components/Questions';
import quizData from './data/quiz.json';
import End from './components/End';
import Modal from './components/Modal';


let interval;

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    if(step === 3){
      clearInterval(interval);
    }
  },[step])

  const quizStartHandler = () =>{
    if(email !== "" && password !== ""){
    setStep(2)
    interval = setInterval(()=>{
      setTime(prevTime => prevTime +1);
    },1000);
  }
}
   
  const resetClickHandler = () =>{
     setActiveQuestion(0);
     setAnswers([]);
     setStep(2);
     setTime(0);
     interval = setInterval(()=>{
       setTime(prevTime => prevTime + 1)
     },1000)
  } 

  return (
    <div className="App">
      {step === 1 && <LoginPage onQuizStart={quizStartHandler}  newEmail={(event)=>setEmail(event.target.value)} newPassword={(event)=> setPassword(event.target.value)}/>}
      {step === 2 && <Questions
      data={quizData.data[activeQuestion]}
      onAnswerUpdate={setAnswers}
      numberOfQuestions={quizData.data.length}
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
      {step === 3 && <End 
      results={answers}
      data ={quizData.data}
      onReset={resetClickHandler}
      onAnswersCheck={()=> setShowModal(true) }
      time={time}
      />}
      {showModal && <Modal
       onClose={()=> setShowModal(false)}
       results= {answers}
       data={quizData.data}
      />}
    </div>
  );
}

export default App;
