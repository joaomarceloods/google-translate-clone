const LanguageSelect = ({ language, onChange }) => {
  return (
    <select>
      <option value="en" onChange={onChange} selected={language === "en"}>English</option>
      <option value="es" onChange={onChange} selected={language === "es"}>Spanish</option>
      <option value="fr" onChange={onChange} selected={language === "fr"}>French</option>
    </select>
  )
}

export default LanguageSelect
