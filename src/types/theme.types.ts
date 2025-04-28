import { Theme } from '@mui/material/styles';

export interface ColorModeContextType {
  toggleColorMode: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextValue {
  theme: Theme;
  colorMode: ColorModeContextType;
} 
