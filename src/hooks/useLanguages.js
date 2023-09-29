import { useEffect, useState } from "react"

const useLanguages = (targetLanguage) => {
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    // Makes a POST request to the Google Translate API
    // https://cloud.google.com/translate/docs/reference/rest/v2/translate
    async function getLanguages() {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2/languages?key=${process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}&target=${targetLanguage}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(res => res.json())

      const languages = response?.data?.languages

      if (languages) {
        setLanguages(languages)
      }
    }

    getLanguages()

    return () => {}
  }, [targetLanguage])

  return languages
}

export default useLanguages
