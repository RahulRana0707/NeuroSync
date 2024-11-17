import { useEffect } from "react";
import "./index.css";

import { Button } from "@/atoms/button";

import { motion } from "framer-motion";
import { Share2, Trophy, RotateCcw, Star, Home, Flame } from "lucide-react";
import confetti from "canvas-confetti";

export interface GameSuccessProps {
  moves: number;
  score: number;
  onRestart?: () => void;
  onHome?: () => void;
}

export function GameSuccess({
  moves = 24,
  score = 45,
  onRestart = () => {},
  onHome = () => {},
}: GameSuccessProps) {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="game-success-overlay"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="game-success-container"
      >
        <div className="game-success-content">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="game-success-header"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="game-success-icon"
            >
              <Trophy className="icon-large icon-yellow" />
            </motion.div>
            <h2 className="heading-primary">Congratulations!</h2>
            <p className="text-muted">
              You've completed the matching pairs game!
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="game-stats"
          >
            <div className="game-stat">
              <RotateCcw className="icon-small icon-primary" />
              <span className="stat-value">{moves}</span>
              <p className="stat-label">Moves</p>
            </div>
            <div className="game-stat">
              <Flame className="icon-small icon-primary" />
              <span className="stat-value">{score}</span>
              <p className="stat-label">Score</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="game-rating"
          >
            <div className="stars">
              {[1, 2, 3].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + star * 0.1 }}
                  className="star"
                >
                  <Star className="icon-large icon-yellow" />
                </motion.div>
              ))}
            </div>
            <p className="text-muted">"Excellent! You're a memory master!"</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="game-actions"
          >
            <Button variant="primary" onClick={onRestart}>
              <RotateCcw className="icon-small" />
              Play Again
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Memory Game Score",
                    text: `I completed the memory game in ${moves} moves and ${score} points!`,
                  });
                }
              }}
            >
              <Share2 className="icon-small" />
              Share Score
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button variant="outline" onClick={onHome}>
              <Home className="icon-small" />
              Return Home
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
