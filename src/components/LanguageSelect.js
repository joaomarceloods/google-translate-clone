import { FormControl, MenuItem, Select } from "@mui/material";

const LanguageSelect = ({ languages, selectedLanguage, onChange }) => {
  const menuItems = languages.map((language) => (
    <MenuItem key={language.language} value={language.language}>
      {language.name}
    </MenuItem>
  ))

  return (
    <FormControl size="small" variant="standard" fullWidth>
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
      >
        {menuItems}
      </Select>
    </FormControl>
  )
};

export default LanguageSelect
