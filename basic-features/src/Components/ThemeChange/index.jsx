import './styles.css'
import useLocalStorage from './useLocalStorage';

export default function ThemeChanger() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <div className="light-dark-mode-container" data-theme={theme}>
        <div className="navbar">
            <button className="theme-change" onClick={handleThemeChange}>Change Theme</button>
        </div>
        <div className="hero-banner">
            <span>Hi there 👋, <br />I&apos;m Aswin P K</span>
        </div>
    </div>
}