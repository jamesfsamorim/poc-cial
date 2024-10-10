import { ButtonProps as MuiButtonProps } from '@mui/material';
import { ButtonVariants } from './styles';

type AllowedButtonProps = Omit<MuiButtonProps, 'variant' | 'size'>;

export interface ButtonProps extends ButtonVariants, AllowedButtonProps {
  label: string;
}