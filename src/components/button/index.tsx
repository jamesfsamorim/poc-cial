import { forwardRef } from 'react';
import { ButtonProps } from './props';
import { buttonVariants } from './styles';
import { Button as MuiButton } from '@mui/material';
import { withTailwindStyles } from '../../context/mui.tailwind';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, label, ...props }, ref) => {
    return (
      <MuiButton
        className={buttonVariants({ variant, size })}
        ref={ref}
        {...props}
        data-cy='hz-button'
      >
        {label}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';

export default withTailwindStyles(Button);