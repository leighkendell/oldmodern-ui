import { FC, HTMLAttributes } from 'react';
import { grainStyles } from './Grain.css';

export interface GrainProps extends HTMLAttributes<HTMLDivElement> {}

export const Grain: FC<GrainProps> = ({ children, ...props }) => {
  return (
    <div className={grainStyles} {...props}>
      {children}
    </div>
  );
};
