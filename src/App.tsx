import FlashCard from "./components/flashCard"
import { useFlashcard } from "./hooks/useFlashCard"
function App() {

const flashcard = useFlashcard()
  return (
    <>
    <div style={style.page}>
        <FlashCard {...flashcard}/>
    </div>
    </>
  )
}

const style = {
    page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f3',
    fontFamily: 'sans-serif',
  }
}

export default App
