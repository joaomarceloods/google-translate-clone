import { useState } from 'react';
import LanguageSelect from './components/LanguageSelect';
import TextInput from './components/TextInput';
import useTranslation from './hooks/useTranslation';

function App() {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang] = useState('es');
  const [text, setText] = useState('Hello World!');
  const translation = useTranslation(text, sourceLang, targetLang);

  return (
    <div>
      <LanguageSelect language={sourceLang} onChange={setSourceLang} />
      <TextInput text={text} onChange={setText} />
      <LanguageSelect language={targetLang} />
      <TextInput text={translation} disabled />
    </div>
  );
}

export default App;
