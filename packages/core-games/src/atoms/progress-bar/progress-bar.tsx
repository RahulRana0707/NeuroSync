import { motion } from "framer-motion";
import "./index.css";

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-bar-wrapper">
      <motion.div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      />
    </div>
  );
};
