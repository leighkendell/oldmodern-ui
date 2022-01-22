import { FC, HTMLAttributes } from 'react';
import { grainStyles } from './Grain.css';

export interface GrainProps extends HTMLAttributes<HTMLDivElement> {}

export const Grain: FC<GrainProps> = ({ children, className, ...props }) => {
  return (
    <div className={`${grainStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
