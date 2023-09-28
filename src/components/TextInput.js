import { TextField } from "@mui/material";

const TextInput = ({ value, placeholder, onChange, disabled }) => {
  return (
    <TextField
      multiline
      variant="filled"
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
