const TextInput = ({ text, onChange, disabled }) => {
  return <textarea value={text} onChange={e => onChange(e.target.value)} disabled={disabled} />;
}

export default TextInput;
