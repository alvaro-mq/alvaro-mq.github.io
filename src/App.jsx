import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  }

  return (
    <div className="App">
      <select onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="es" >Spanish</option>
      </select>
      <div className='text-3xl font-bold underline'>
        {t('text')}
      </div>
    </div>
  );
}

export default App;
