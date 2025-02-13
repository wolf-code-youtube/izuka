import { useState, useEffect, useRef } from "react";
import mycar from "../../public/mycar.png";
import carface from "../../public/carface.jpg";
import { Link } from "react-router-dom";

const CarGame = () => {
  const [playerX, setPlayerX] = useState(150);
  const [enemyCars, setEnemyCars] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeSurvived, setTimeSurvived] = useState(0);
  const [showNextGame, setShowNextGame] = useState(false);
  const gameRef = useRef(null);

  const moveLeft = () => {
    if (playerX > 0) setPlayerX(playerX - 20);
  };

  const moveRight = () => {
    if (playerX < 300) setPlayerX(playerX + 20);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
  };

  // Timer to track survival time
  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeSurvived((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameOver]);

  // Show "Next Game" button after 20 seconds
  useEffect(() => {
    if (timeSurvived >= 30) {
      setShowNextGame(true);
    }
  }, [timeSurvived]);

  // Spawn enemy cars at random positions
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        setEnemyCars((prev) => [
          ...prev,
          { x: Math.random() * 300, y: -100 },
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Move enemy cars down
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        setEnemyCars((prev) =>
          prev
            .map((car) => ({ ...car, y: car.y + 10 }))
            .filter((car) => car.y < 500)
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Check for collision
  useEffect(() => {
    enemyCars.forEach((car) => {
      if (car.y > 350 && car.y < 450 && Math.abs(car.x - playerX) < 50) {
        setGameOver(true);
        setTimeSurvived(0); // Reset timer on collision
        setShowNextGame(false); // Hide "Next Game" button
      }
    });
  }, [enemyCars, playerX]);

  return (
    <>
      <div className="text-3xl text-center p-10">
        Click on car to play, survive for 30 seconds from monster lady
      </div>

      <div
        className="relative bg-gray-900 w-[400px] h-[500px] mx-auto overflow-hidden border-4 border-gray-700"
        tabIndex={0}
        ref={gameRef}
        onKeyDown={handleKeyDown}
      >
        {/* Timer Display */}
        <div className="absolute top-4 left-4 text-xl text-[#f5deb3] font-mono">
          Survived: {timeSurvived}s
        </div>

        {/* Player Car */}
        <img
          src={mycar}
          alt="Player Car"
          className="absolute w-[50px] h-[80px]"
          style={{ left: playerX, bottom: "20px" }}
        />

        {/* Enemy Cars */}
        {enemyCars.map((car, index) => (
          <img
            key={index}
            src={carface}
            height={200}
            width={200}
            alt="Enemy Car"
            className="absolute w-[50px] h-[80px]"
            style={{ left: car.x, top: car.y }}
          />
        ))}

        {/* Game Over Text */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-3xl font-bold">
            <p>Game Over</p>
            <button
              onClick={() => {
                setGameOver(false);
                setEnemyCars([]);
                setTimeSurvived(0); // Reset timer
                setShowNextGame(false);
              }}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
            >
              Restart
            </button>
          </div>
        )}

        {/* Next Game Button (Appears after 20s survival) */}
        {showNextGame && !gameOver && (
          <Link to="/map4"
            className="absolute top-4 right-4 px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-mono rounded-lg"
          >
            Next Game →
          </Link>
        )}
      </div>
    </>
  );
};

export default CarGame;
