'use client';

import { useState } from 'react'; // 'react' should be lowercase

const Hello = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [stage, setStage] = useState(0); // 0 = Milestone-1, 1 = Hello World, 2 = With Next.js, 3 = By Aqsa Shah

  const handleCelebrateClick = () => {
    setShowConfetti(true);

    // Cycle through the stages
    if (stage < 3) {
      setStage(stage + 1); // Move to the next stage
    } else {
      setStage(0); // Reset to Milestone-1 after By Aqsa Shah
    }

    setTimeout(() => {
      setShowConfetti(false);
    }, 60000); // Confetti for 1 minute
  };

  return (
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        {stage === 0 && <h1 className="text-4xl font-bold text-pink-700">Milestone-1</h1>}
        {stage === 1 && <h1 className="text-4xl font-bold text-pink-700">Hello World</h1>}
        {stage === 2 && <h1 className="text-4xl font-bold text-pink-700">With Next.js</h1>}
        {stage === 3 && <h1 className="text-4xl font-bold text-pink-700">By Aqsa Shah</h1>}

        <button
          onClick={handleCelebrateClick}
          className="mt-6 bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-600"
        >
          Click Me to See CHANGES
        </button>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: getRandomColor(),
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

// Generate random confetti color
function getRandomColor() {
  const colors = ['#FFCC00', '#FF6666', '#66FF66', '#66CCFF', '#FF66CC'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default Hello;
