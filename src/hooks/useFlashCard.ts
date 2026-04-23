import { useState } from 'react'
import words from '../data'

export function useFlashcard() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showTranslation, setShowTranslation] = useState(false)

    const next = () => {
        setCurrentIndex(prev => (prev + 1) % words.length)
        setShowTranslation(false)
    }

    return {
        word: words[currentIndex],
        total: words.length,
        currentIndex,
        showTranslation,
        show: () => setShowTranslation(true),
        hide: () => setShowTranslation(false),
        next,
    }
}
