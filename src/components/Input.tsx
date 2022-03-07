import {
  ElementType,
  FC,
  forwardRef,
  InputHTMLAttributes,
  useRef,
} from 'react';
import { nanoid } from 'nanoid';
import * as styles from './Input.css';
import { Text } from '.';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: ElementType<any>;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, as = 'input', ...props }, ref) => {
    const id = useRef(nanoid());
    const Component = as;

    return (
      <div>
        {label && (
          <Text as='label' htmlFor={`input_${id.current}`} weight='bold'>
            {label}
          </Text>
        )}
        <Component
          id={`input_${id.current}`}
          className={styles.input}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);
