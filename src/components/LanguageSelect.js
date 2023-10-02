import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Grid,
  Grow,
  Paper,
  Portal,
  TextField,
} from "@mui/material";
import { useState } from "react";

const LanguageSelect = ({
  languages,
  selectedLanguage,
  onChange,
  dropdownContainerRef,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    if (open) setOpen(false);
  };

  const handleClickLanguage = (language) => {
    onChange(language);
    setOpen(false);
  };

  const popoverId = open ? "language-popover" : null;

  const selectedLanguageName =
    languages.find((language) => {
      return language.language === selectedLanguage;
    })?.name || "No language selected";

  const menuItems = languages
    .filter((language) => {
      if (search === "") return true;
      return (
        language.name.toLowerCase().includes(search.toLowerCase()) ||
        language.language.toLowerCase().includes(search.toLowerCase())
      );
    })
    .map((language) => (
      <Grid key={language.language} xs={12} md={3} lg={2} item>
        <Button
          fullWidth
          sx={{ justifyContent: "left" }}
          value={language.language}
          onClick={() => handleClickLanguage(language.language)}
        >
          {language.name}
        </Button>
      </Grid>
    ));

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box flex={1}>
        <Button
          fullWidth
          aria-describedby={popoverId}
          variant="text"
          onClick={handleClickButton}
        >
          {selectedLanguageName}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Portal container={dropdownContainerRef.current}>
          <Container disableGutters role="presentation">
            <Box position="relative" zIndex={1}>
              <Box position="absolute" width="100%">
                <Grow in={open} sx={{ transformOrigin: "50% 0 0" }}>
                  <Paper elevation={3} id={popoverId}>
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Search language"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      padding={2}
                    />
                    <Grid
                      container
                      maxHeight="80vh"
                      flexDirection="column"
                      padding={2}
                    >
                      {menuItems}
                    </Grid>
                  </Paper>
                </Grow>
              </Box>
            </Box>
          </Container>
        </Portal>
      </Box>
    </ClickAwayListener>
  );
};

export default LanguageSelect;
