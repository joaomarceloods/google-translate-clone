import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useRef, useState } from 'react';
import { SwapHoriz } from '@mui/icons-material';
import { Box, Container, CssBaseline, IconButton, Stack } from '@mui/material';
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
  const dropdownContainerRef = useRef(null)

  const clientLanguage = navigator.language?.substring(0, 2) || 'en'
  const languages = useLanguages(clientLanguage);
  const sourcePlaceholder = useTranslation('Enter text here', 'en', clientLanguage);
  const targetPlaceholder = useTranslation('Translation will appear here', 'en', clientLanguage);

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(translation);
  }

  return (
    <>
      <CssBaseline />
      <TopAppBar />
      <Container>
        <Grid container columnSpacing={2} rowSpacing={1} marginTop={2}>
          <Grid xs={12} direction="row">
            <Stack direction="row" alignItems="center" spacing={1}>
              <LanguageSelect languages={languages} selectedLanguage={sourceLang} onChange={setSourceLang} dropdownContainerRef={dropdownContainerRef} />
              <IconButton aria-label="swap languages" onClick={swapLanguages}>
                <SwapHoriz />
              </IconButton>
              <LanguageSelect languages={languages} selectedLanguage={targetLang} onChange={setTargetLang} dropdownContainerRef={dropdownContainerRef} />
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Box ref={dropdownContainerRef} />
          </Grid>
          <Grid xs={12} md={6}>
            <TextInput value={text} onChange={setText} placeholder={sourcePlaceholder} />
          </Grid>
          <Grid xs={12} md={6}>
            <TextInput value={translation} disabled placeholder={targetPlaceholder} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
