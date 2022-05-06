import './App.css';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <select onChange={changeLanguageHandler} className="mt-20">
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <div className="text-3xl font-bold underline">{t('text')}</div>
    </div>
  );
}

export default App;
