import { useEffect, useState } from "react"
import debounce from "lodash.debounce"

// Makes a POST request to the Google Translate API
// https://cloud.google.com/translate/docs/reference/rest/v2/translate
async function translateText(text, source, target, callback) {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}&q=${text}&source=${source}&target=${target}&format=text`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }

  ).then(res => res.json())

  const translatedText = response?.data?.translations[0]?.translatedText

  if (translatedText) {
    callback(translatedText)
  }
}

const translateTextDebounced = debounce(translateText, 500, { maxWait: 2000 })

const useTranslation = (text, source, target) => {
  const [translation, setTranslation] = useState("")

  useEffect(() => {
    if (source === target) {
      setTranslation(text)
    } else if (text) {
      translateTextDebounced(text, source, target, setTranslation)
    } else {
      setTranslation("")
    }

    return () => {}
  }, [text, source, target])

  return translation
}

export default useTranslation
