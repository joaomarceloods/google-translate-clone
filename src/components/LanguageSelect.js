import { FormControl, MenuItem, Select } from "@mui/material";

const LanguageSelect = ({ selectedLanguage, onChange }) => {
  return (
    <FormControl size="small" variant="standard">
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
      </Select>
    </FormControl>
  )
};

export default LanguageSelect
