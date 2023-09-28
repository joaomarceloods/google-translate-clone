import { TextField } from "@mui/material";

const TextInput = ({ text, onChange, disabled }) => {
  return (
    <TextField
      multiline
      variant="filled"
      rows={4}
      value={text}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}

export default TextInput;
