import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Container,
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
    .map((language) => {
      const selected = language.language === selectedLanguage;
      return (
        <Box key={language.language} display="inline">
          <Button
            fullWidth
            size="small"
            value={language.language}
            onClick={() => handleClickLanguage(language.language)}
            variant={selected ? "contained" : "text"}
            sx={{
              justifyContent: "left",
              textTransform: "none",
              fontWeight: selected ? 600 : 400,
            }}
          >
            {language.name}
          </Button>
        </Box>
      );
    });

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
          <Grow in={open} sx={{ transformOrigin: "50% 0 0" }}>
            <Container disableGutters role="presentation">
              <Box position="relative" zIndex={1}>
                <Box position="absolute" width="100%">
                  <Paper elevation={3} id={popoverId} sx={{ marginBottom: 3 }}>
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Search language…"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      InputProps={{ sx: { px: 3, py: 1 } }}
                    />
                    <Box
                      padding={2}
                      sx={{ columnCount: { xs: 1, sm: 3, md: 4, lg: 6 } }}
                    >
                      {menuItems}
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Container>
          </Grow>
        </Portal>
      </Box>
    </ClickAwayListener>
  );
};

export default LanguageSelect;
