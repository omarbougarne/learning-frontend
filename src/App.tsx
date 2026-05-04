import { useState } from "react"
import SetupScreen from "./screens/SetupScreen";
import FlashCardScreen from "./screens/FlashCardScreen";
function App() {
    const [screen, setScreen] = useState('setup');
    const [config, setConfig] = useState({ language: null, difficulty: null })



    const handleStart = (language, difficulty) => {
    setConfig({ language, difficulty })
    setScreen('flashcard')
    }
  return (
  <div style={style.page}>
    {screen === 'setup'
      ? <SetupScreen onStart={handleStart} />
      : <FlashCardScreen config={config} />
    }
  </div>
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
