import { FC, InputHTMLAttributes, useRef } from 'react';
import { nanoid } from 'nanoid';
import * as styles from './Input.css';
import { Text } from '.';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = ({ label, ...props }) => {
  const id = useRef(nanoid());

  return (
    <div>
      {label && (
        <Text as='label' htmlFor={`input_${id.current}`}>
          {label}
        </Text>
      )}
      <input id={`input_${id.current}`} className={styles.input} {...props} />
    </div>
  );
};
