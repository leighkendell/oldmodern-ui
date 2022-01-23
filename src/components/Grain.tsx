import { FC, forwardRef, HTMLAttributes } from 'react';
import { grainStyles } from './Grain.css';

export interface GrainProps extends HTMLAttributes<HTMLDivElement> {}

export const Grain: FC<GrainProps> = forwardRef<HTMLDivElement, GrainProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={`${grainStyles} ${className}`} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
