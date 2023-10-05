import { TextField } from "@mui/material";

const TextInput = ({ value, placeholder, onChange, disabled }) => {
  return (
    <TextField
      multiline
      fullWidth
      variant="outlined"
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      inputProps={{ style: { fontSize: '1.5rem' } }}
    />
  );
}

export default TextInput;
