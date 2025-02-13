import { useState, useEffect, useRef } from "react";
import videoSrc from "../../public/face.jpg"; // Replace with your video file
import { Link } from "react-router-dom";

const QuizGame = () => {
  const question = {
    text: "Who is this?",
    options: ["Tiku badmas", "Urfi Javed", "Ishika Goswami", "Dharampal"],
    correctAnswer: "Dharampal",
  };

  const [points, setPoints] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState("");
  const audioRef = useRef(null);

 
  const handleAnswer = (option) => {
    if (option === question.correctAnswer) {
      setPoints(points + 10);
      setMessage("✅ Correct! You earned 10 points!");
    } else {
      setMessage("❌ nope (refresh maro)");
    }
    setSelectedAnswer(option);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2c2c2c] p-6 relative">
      {/* Background Music */}

     
      {/* <audio ref={audioRef} src={bgMusic} loop autoPlay muted /> */}

      {/* Points Display */}
      <div className="absolute top-4 right-4 text-xl text-[#f5deb3] font-mono">
        Points: {points}
      </div>

      {/* Quiz Box */}
      <div className="bg-[#4a3f35] text-[#f5deb3] p-6 rounded-lg shadow-lg text-center w-full max-w-lg border-4 border-[#8b6f47]">
        {/* Video Display */}
        <img
          src={videoSrc}
          className="w-64 h-64 object-cover rounded-md mx-auto mb-4 border-4 border-[#8b6f47]"
        />

        <h2 className="text-2xl mb-4 font-bold font-mono">{question.text}</h2>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`p-3 text-lg rounded-lg border-2 border-[#8b6f47] bg-[#3b3024] hover:bg-[#5a4637] font-mono ${
                selectedAnswer === option
                  ? option === question.correctAnswer
                    ? "bg-green-600"
                    : "bg-red-600"
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Message Display */}
        {message && <p className="mt-4 text-lg font-mono">{message}</p>}

        {/* Next Game Button (Only if correct answer is chosen) */}
        {selectedAnswer === question.correctAnswer && (
          <Link to="/map3"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-mono rounded-lg hover:bg-blue-800 absolute right-4"
          >
            Next Game →
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
