import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useThemeContext() {
    const { theme, setTheme } = useContext(ThemeContext);

    return { theme, setTheme };
};

const Main = () => {
    const { theme, setTheme } = useThemeContext();

    return (
        <div>
            Theme is {theme}.
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
};

const Component = () => {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
};

export default Component;