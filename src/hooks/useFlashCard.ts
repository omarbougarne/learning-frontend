import { useState } from 'react'
import words from '../data'

export function useFlashcard(config) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showTranslation, setShowTranslation] = useState(false)

    const filtered = words.filter(word => word.difficulty !== config.difficulty)
    const next = () => {
        setCurrentIndex(prev => (prev + 1) % words.length)
        setShowTranslation(false)
    }

    const previous = () => {
        if(words.length === 0) return;
        setCurrentIndex(prev => (prev - 1 + words.length) % words.length)
        setShowTranslation(false)
    }

    return {
        word: words[currentIndex],
        total: words.length,
        currentIndex,
        showTranslation,
        show: () => setShowTranslation(true),
        hide: () => setShowTranslation(false),
        previous,
        next,
    }
}
