
import { useState } from "react";
import Scoreboard from "./ScoreBoard";
import Timer from "./Timer";
import Question from "./Question";


export const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library",
  },
  {
    id: 2,
    question: "Which hook is used for state management?",
    options: ["useEffect", "useState", "useReducer", "useRef"],
    answer: "useState",
  },
  {
    id: 3,
    question: "Tailwind CSS is a...",
    options: ["CSS Framework", "JavaScript Library", "HTML Preprocessor", "None"],
    answer: "CSS Framework",
  },
  {
    id: 4,
    question: "Which JavaScript keyword is used to declare a constant variable?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    id: 5,
    question: "Which function is used to render components in React?",
    options: ["ReactDOM.render", "React.render", "renderComponent", "ReactDOM.create"],
    answer: "ReactDOM.render",
  },
  {
    id: 6,
    question: "Which of the following is not a JavaScript framework?",
    options: ["Angular", "Vue", "Django", "Svelte"],
    answer: "Django",
  },
  {
    id: 7,
    question: "Which of the following is used to make API requests in JavaScript?",
    options: ["fetch()", "axios()", "httpRequest()", "Both fetch() and axios()"],
    answer: "Both fetch() and axios()",
  },
  {
    id: 8,
    question: "What is the default behavior of the useEffect hook in React?",
    options: [
      "Runs after every render",
      "Runs only once when the component mounts",
      "Runs only on state updates",
      "Runs before the component renders"
    ],
    answer: "Runs after every render",
  },
  {
    id: 9,
    question: "Which HTTP method is commonly used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
  },
  {
    id: 10,
    question: "Which JavaScript method is used to convert a JSON string into an object?",
    options: ["JSON.stringify()", "JSON.parse()", "toObject()", "parseJSON()"],
    answer: "JSON.parse()",
  },
  {
    id: 11,
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "Java Extended Script",
      "JavaScript XHR"
    ],
    answer: "JavaScript XML",
  },
  {
    id: 12,
    question: "Which CSS property is used to make a flex container?",
    options: ["display: grid;", "display: flex;", "flex-container: true;", "flex: auto;"],
    answer: "display: flex;",
  },
  {
    id: 13,
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    answer: "MongoDB",
  },
  {
    id: 14,
    question: "Which of the following is not a valid JavaScript data type?",
    options: ["String", "Boolean", "Integer", "Undefined"],
    answer: "Integer",
  },
  {
    id: 15,
    question: "What does the Node.js runtime allow you to do?",
    options: [
      "Run JavaScript in the browser",
      "Execute JavaScript outside the browser",
      "Compile JavaScript into machine code",
      "Use JavaScript for mobile app development"
    ],
    answer: "Execute JavaScript outside the browser",
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleAnswerSelection = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnded(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {quizEnded ? (
        <Scoreboard score={score} total={questions.length} />
      ) : (
        <>
          <Timer duration={30} onTimeUp={nextQuestion} />
          <Question questionData={questions[currentQuestion]} onSelectAnswer={handleAnswerSelection} />
        </>
      )}
    </div>
  );
};

export default Quiz;
