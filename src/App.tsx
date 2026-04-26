import { useState } from "react"
import FlashCard from "./components/flashCard"
import { useFlashcard } from "./hooks/useFlashCard"
function App() {
    const [screen, setScreen] = useState('setup');
    const [config, setConfig] = useState({ language: null, difficulty: null })

    const flashcard = useFlashcard(config);

    const handleStart = (language, difficulty) => {
    setConfig({ language, difficulty })
    setScreen('flashcard')
    }
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
