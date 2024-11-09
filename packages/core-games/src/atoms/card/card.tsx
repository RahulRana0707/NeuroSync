import { CardStatus } from "@/types/card";
import { useAnimate } from "framer-motion";
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  cardStatus: CardStatus;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, cardStatus, ...rest }, ref) => {
    const [scope, animate] = useAnimate();
    const isFirstRender = useRef(true);

    useEffect(() => {
      if (isFirstRender.current) {
        animate(
          scope.current,
          { scale: [1.2, 1], opacity: [0.3, 1] },
          {
            duration: 0.6,
            ease: "easeOut",
          }
        );
      }

      if (cardStatus === CardStatus.HIDDEN) {
        animate(
          scope.current,
          {
            rotateY: [180, 0],
          },
          {
            duration: 0.6,
            ease: "easeOut",
          }
        );
      } else if (cardStatus === CardStatus.SELECTED) {
        animate(
          scope.current,
          {
            rotateY: [0, 180],
          },
          {
            duration: 0.6,
            ease: "easeOut",
          }
        );
      } else {
        animate(scope.current, {});
      }

      isFirstRender.current = false;

      return () => {
        isFirstRender.current = true;
      };
    }, [animate, cardStatus, scope]);

    return (
      <div
        className={`card ${className}`}
        ref={scope}
        style={{ perspective: 3000 }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
