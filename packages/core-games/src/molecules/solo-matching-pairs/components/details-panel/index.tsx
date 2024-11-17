import { FC } from "react";
import { motion } from "framer-motion";
import "./index.css";
import ProgressBar from "@/atoms/progress-bar";
import { Button } from "@/atoms/button";

interface DetailsPanelProps {
  title: string;
  gameName: string;
  description: string;
  movesCount: number;
  score: number;
  progress: number;
  onRestart: () => void;
}

const panelVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const DetailsPanel: FC<DetailsPanelProps> = ({
  description,
  title,
  gameName,
  movesCount,
  onRestart,
  score,
  progress,
}) => {
  return (
    <motion.aside
      className="classic-mode-details-panel"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="details-panel-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="details-panel-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="details-panel-game-name">{gameName}</h2>
        <p className="details-panel-description">{description}</p>

        <div className="details-panel-stats">
          <div className="stats-item">
            <span>Score:</span>
            <span>{score}</span>
          </div>
          <div className="stats-item">
            <span>Moves:</span>
            <span>{movesCount}</span>
          </div>
        </div>

        <div className="details-panel-configurations">
          <div className="progress-bar-container">
            <span>Progress: {progress}%</span>
            <ProgressBar progress={progress} />
          </div>
          <Button variant="secondary" onClick={onRestart}>
            Restart Game
          </Button>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default DetailsPanel;
