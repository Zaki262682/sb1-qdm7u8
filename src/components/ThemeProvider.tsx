import React, { useEffect } from 'react';
import { useTheme } from '../store/useTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return <>{children}</>;
};