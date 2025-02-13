import React, { useState, useEffect } from 'react';
import '../App.css';

// Replace with your girlfriend's image
import gfImage from "../assets/gf_image.jpeg"; 
import image_1 from "../assets/image_1.jpeg";
import image_2 from "../assets/image_2.jpeg";
import image_3 from "../assets/image_3.jpeg";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.jpeg";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const CardGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Card images array (you can add more images to this)
  const images = [gfImage, image_1, image_2, image_3, image_4, image_5];
  const doubledImages = [...images, ...images]; // Double the images to create pairs
  
  useEffect(() => {
    // Shuffle and create cards
    const shuffledCards = shuffleArray(doubledImages).map((image, index) => ({
      id: index,
      image: image,
      flipped: false,
      matched: false,
    }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || cards[index].flipped || cards[index].matched) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedIndices([...flippedIndices, index]);

    if (flippedIndices.length === 1) {
      const firstCard = cards[flippedIndices[0]];
      const secondCard = newCards[index];

      // Check if both cards match
      if (firstCard.image === secondCard.image) {
        setMatchedCards([...matchedCards, firstCard.image]);
        if (matchedCards.length === doubledImages.length / 2 - 1) {
          setGameOver(true);
        }
      } else {
        setTimeout(() => {
          const updatedCards = [...cards];
          updatedCards[flippedIndices[0]].flipped = false;
          updatedCards[index].flipped = false;
          setCards(updatedCards);
        }, 1000);
      }

      setFlippedIndices([]);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Memory Match Game</h1>
      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              {/* Front of the card */}
              <div className="card-front">
                {/* You can put a placeholder or logo on the front if desired */}
                <div className="card-placeholder">?</div>
              </div>
              {/* Back of the card */}
              <div className="card-back">
                {/* Render the image when the card is flipped */}
                {card.flipped || card.matched ? (
                  <img
                    src={card.image}
                    alt="card"
                    className="card-image" // Apply styles to set dimensions
                  />
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      {gameOver && <div className="game-over">You won! Good job nigga !</div>}
    </div>
  );
};

export default CardGame;
