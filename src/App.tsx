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

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f3',
    fontFamily: 'sans-serif',
  },
  card: {
    background: '#fff',
    border: '1px solid #e5e5e3',
    borderRadius: 12,
    padding: '2rem',
    width: '100%',
    maxWidth: 380,
  },
  label: {
    fontSize: 13,
    color: '#888',
    margin: '0 0 1.5rem',
  },
  word: {
    fontSize: 36,
    fontWeight: 500,
    margin: '0 0 0.5rem',
    color: '#111',
  },
  translation: {
    fontSize: 24,
    color: '#666',
    margin: '0 0 2rem',
    minHeight: 36,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e5e5e3',
    margin: '1.5rem 0',
  },
  actions: {
    display: 'flex',
    gap: 8,
  },
  btn: {
    flex: 1,
    padding: '8px 12px',
    fontSize: 14,
    borderRadius: 8,
    border: '1px solid #ddd',
    background: 'transparent',
    cursor: 'pointer',
  },
  btnNext: {
    background: '#f0f0ee',
    fontWeight: 500,
  },
  counter: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'right',
    margin: '1rem 0 0',
  },
}

export default App
