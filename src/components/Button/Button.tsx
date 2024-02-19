import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';

type Variant = 'primary' | 'success' | 'danger' | 'white' | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  expanded?: boolean;
  variant?: Variant;
};

const Button = ({
  label,
  variant = 'primary',
  expanded = false,
  ...rest
}: Props) => {
  const variants: { [key: string]: string } = {
    primary: classes.primary,
    danger: classes.danger,
  };
  return (
    <button
      className={`${classes.Button} ${variants[variant]}${
        expanded ? ` ${classes.expanded}` : ''
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
