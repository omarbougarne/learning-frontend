import { useState } from 'react'
import words from "./data"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % words.length)
    setShowTranslation(false)
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <p style={styles.label}>Do you know what this word means?</p>

        <p style={styles.word}>{words[currentIndex].en}</p>

        <p style={{ ...styles.translation, visibility: showTranslation ? 'visible' : 'hidden' }}>
          {words[currentIndex].es}
        </p>

        <hr style={styles.divider} />

        <div style={styles.actions}>
          <button style={styles.btn} onClick={() => setShowTranslation(true)}>Show</button>
          <button style={styles.btn} onClick={() => setShowTranslation(false)}>Hide</button>
          <button style={{ ...styles.btn, ...styles.btnNext }} onClick={nextSlide}>Next →</button>
        </div>

        <p style={styles.counter}>{currentIndex + 1} / {words.length}</p>
      </div>
    </div>
  )
}



export default App
