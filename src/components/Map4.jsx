import React from 'react';
import gugu from "../../public/gugu.png";
import { Link } from 'react-router-dom';

const GameMap4 = () => {
  return (
    <div className="flex w-full pt-72 pl-72 pb-72 items-center justify-between bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 p-6 rounded-3xl shadow-2xl border-4 border-[#C9A26E]">
      {/* Image Section */}
      <div className="w-72 h-72 mr-4 border-4 border-[#C9A26E] rounded-3xl shadow-lg">
        <img
          src={gugu}
          alt="gugu"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center">
        <h2 className="text-3xl font-serif text-[#C9A26E] mb-4">Wait a second !</h2>
        <p className="text-lg text-gray-200 mb-6 font-serif leading-relaxed">
          How am I speaking, I am a dog.  </p>
        
        {/* Vintage-styled Button */}
        <Link
          className="inline-block bg-[#C9A26E] text-black py-3 px-8 rounded-xl text-lg font-serif transition duration-300 transform hover:scale-105 hover:bg-[#A48156] hover:shadow-xl"
          to="/4"
        >
          Bhau Bhau Bhau 
        </Link>
      </div>
    </div>
  );
};

export default GameMap4;
