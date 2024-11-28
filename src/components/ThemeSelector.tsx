import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme, Theme } from '../store/useTheme';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun size={16} /> },
    { value: 'dark', label: 'Dark', icon: <Moon size={16} /> },
    { value: 'blue', label: 'Blue', icon: <Palette size={16} className="text-blue-500" /> },
    { value: 'green', label: 'Green', icon: <Palette size={16} className="text-green-500" /> },
  ];

  return (
    <div className="flex items-center gap-2">
      {themes.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
            theme === value
              ? 'bg-blue-100 text-blue-600'
              : 'hover:bg-gray-100 text-gray-600'
          }`}
          aria-label={`Switch to ${label} theme`}
        >
          {icon}
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};