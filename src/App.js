import { useState } from 'react';
import LanguageSelect from './components/LanguageSelect';
import TextInput from './components/TextInput';

function App() {
  const [language1, setLanguage1] = useState('en');
  const [language2, setLanguage2] = useState('es');

  return (
    <div>
      <LanguageSelect language={language1} onChange={setLanguage1} />
      <TextInput />
      <LanguageSelect language={language2} onChange={setLanguage2} />
      <TextInput disabled />
    </div>
  );
}

export default App;
