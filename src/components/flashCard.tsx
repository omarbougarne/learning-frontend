import { styles } from "../styles/style"
export default function Flashcard({ word, total, currentIndex, showTranslation, show, hide, previous, next, config }) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>Do you know what this word means?</p>
      <p style={styles.word}>{word[config.language]}</p>
      <p style={{ ...styles.translation, visibility: showTranslation ? 'visible' : 'hidden' }}>
        {word[config.language]}
      </p>
      <hr style={styles.divider} />
      <div style={styles.actions}>
        <button style={{ ...styles.btn, ...styles.btnNextPrevious }} onClick={previous}>Previous</button>
        <button style={styles.btn} onClick={show}>Show</button>
        <button style={styles.btn} onClick={hide}>Hide</button>
        <button style={{ ...styles.btn, ...styles.btnNextPrevious }} onClick={next}>Next</button>
      </div>
      <p style={styles.counter}>{currentIndex + 1} / {total}</p>
    </div>
  )
}
