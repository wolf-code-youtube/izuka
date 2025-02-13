import { useState } from "react";
import myGfPic from "../../public/gf.png"; // Replace with your girlfriend's picture
import CarGame from "./CarGame"; // Import the game component
import { Link } from "react-router-dom";

const GameStart = () => {
  return (
    <>
      
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Ishika 14 Feb Quest Game</h1>
          <img
            src={myGfPic}
            alt="My Girlfriend"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
          <p className="text-lg mt-4">Are you ready to rescue Prince Sam and fight the monster lady?</p>
          <Link to="/map1"
            className="mt-6 px-6 py-3 bg-green-500 text-white text-xl rounded-lg shadow-lg hover:bg-green-700 transition"
          >
            Start Game
          </Link>
        </div>
      
    </>
  );
};

export default GameStart;
