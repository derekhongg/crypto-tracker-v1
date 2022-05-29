import Home from './components/Home';
import {createContext, useState} from "react";
import ReactSwitch from 'react-switch';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light": "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='switch'>
          <label className='switch-label'>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
