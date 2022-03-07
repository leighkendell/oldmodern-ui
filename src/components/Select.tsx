import {
  ElementType,
  FC,
  forwardRef,
  InputHTMLAttributes,
  useRef,
} from 'react';
import { nanoid } from 'nanoid';
import * as styles from './Select.css';
import { Text } from '.';

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ label, ...props }, ref) => {
  const id = useRef(nanoid());

  return (
    <div>
      {label && (
        <Text as='label' htmlFor={`input_${id.current}`} weight='bold'>
          {label}
        </Text>
      )}
      <select
        id={`input_${id.current}`}
        className={styles.select}
        {...props}
        ref={ref}
      />
    </div>
  );
});
