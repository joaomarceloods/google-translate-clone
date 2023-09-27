const LanguageSelect = ({ language, onChange }) => {
  return (
    <select value={language} onChange={e => onChange(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  )
}

export default LanguageSelect
