import { useState } from "react"
export default function SetupScreen( {onStart} ) {
    const [language, setLanguage] = useState("en");
    const [difficulty, setDifficulty] = useState('easy');

    const languages = ['en', 'es'];
    const difficulties = ['easy', 'medium', 'hard'];
    return(
        <div>
            Hola! Welcome!<br />
            choose a language and a difficulty.
            <select onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((l) => {
                    return(
                        <option>{l}</option>
                    )
                })}
            </select>
            <select onChange={(e) => setDifficulty(e.target.value)}>
                {difficulties.map((d) => {
                    return(
                        <option>{d}</option>
                    )
                })}
            </select>
            <button onClick={() => onStart(language, difficulty)}>Come In</button>
        </div>
    )
}
