import { useState } from "react";

const Question = ({ questionData, onSelectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
    const correct = option === questionData.answer;
    setIsCorrect(correct);

    setTimeout(() => {
      onSelectAnswer(option);
      setSelectedOption(null);
      setIsCorrect(null);
    }, 1500); // Move to next question after 1.5 seconds
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
      <h2 className="text-xl font-bold mb-4">{questionData.question}</h2>
      <div className="space-y-2">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-2 rounded-md font-medium transition-colors duration-300
              ${
                selectedOption
                  ? option === questionData.answer
                    ? "bg-green-500 text-white"
                    : option === selectedOption
                    ? "bg-red-500 text-white"
                    : "bg-gray-300"
                  : "bg-gray-500 text-white hover:bg-blue-500"
              }`}
            onClick={() => handleClick(option)}
            disabled={selectedOption !== null} 
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
