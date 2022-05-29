import Home from './components/Home';
import {createContext, useState} from "react";
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light": "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
