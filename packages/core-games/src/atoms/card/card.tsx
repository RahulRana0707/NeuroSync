import { useAnimate } from "framer-motion";
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useImperativeHandle,
} from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export interface CardRef {
  reveal: () => void;
  hide: () => void;
}

export const Card = forwardRef<CardRef, CardProps>(
  ({ className, children, ...rest }, ref) => {
    const [scope, animate] = useAnimate();

    const reveal = useCallback(() => {
      animate(
        scope.current,
        {
          rotateY: [0, 180],
          backgroundColor: "transparent",
        },
        {
          duration: 0.6,
          ease: "easeOut",
        }
      );
    }, [animate, scope]);

    const hide = useCallback(() => {
      animate(
        scope.current,
        {
          rotateY: [180, 0],
          backgroundColor: "",
        },
        {
          duration: 0.6,
          ease: "easeOut",
        }
      );
    }, [animate, scope]);

    useImperativeHandle(
      ref,
      () => {
        return {
          hide,
          reveal,
        };
      },
      [reveal, hide]
    );

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
