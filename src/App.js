import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';
import { Container, CssBaseline, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import useLanguages from './hooks/useLanguages';
import useTranslation from './hooks/useTranslation';
import LanguageSelect from './components/LanguageSelect';
import TextInput from './components/TextInput';
import TopAppBar from './components/TopAppBar';

function App() {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [text, setText] = useState('');
  const translation = useTranslation(text, sourceLang, targetLang);

  const clientLanguage = navigator.language?.substring(0, 2) || 'en'
  const languages = useLanguages(clientLanguage);
  const sourcePlaceholder = useTranslation('Enter text here', 'en', clientLanguage);
  const targetPlaceholder = useTranslation('Translation will appear here', 'en', clientLanguage);

  return (
    <>
      <CssBaseline />
      <TopAppBar />
      <Container>
        <Grid container columnSpacing={2} rowSpacing={4} marginTop={2}>
          <Grid xs={12} lg={6}>
            <Stack spacing={1}>
              <LanguageSelect languages={languages} selectedLanguage={sourceLang} onChange={setSourceLang} />
              <TextInput value={text} onChange={setText} placeholder={sourcePlaceholder} />
            </Stack>
          </Grid>
          <Grid xs={12} lg={6}>
            <Stack spacing={1}>
              <LanguageSelect languages={languages} selectedLanguage={targetLang} onChange={setTargetLang} />
              <TextInput value={translation} disabled placeholder={targetPlaceholder} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
