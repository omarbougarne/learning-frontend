import { useState } from 'react'
import words from '../data'

export function useFlashcard(config) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showTranslation, setShowTranslation] = useState(false)

    const filtered = words.filter(word => word.difficulty === config.difficulty);
    console.log(config.difficulty, filtered)
    const selected = filtered[currentIndex][config.language];
    const next = () => {
        setCurrentIndex(prev => (prev + 1) % filtered.length)
        setShowTranslation(false)
    }

    const previous = () => {
        if(filtered.length === 0) return;
        setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length)
        setShowTranslation(false)
    }

    return {
        word: filtered[currentIndex],
        total: words.length,
        currentIndex,
        showTranslation,
        show: () => setShowTranslation(true),
        hide: () => setShowTranslation(false),
        previous,
        next,
    }
}
