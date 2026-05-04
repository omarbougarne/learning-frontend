import Flashcard from "../components/flashCard";
import { useFlashcard } from "../hooks/useFlashCard";

export default function FlashCardScreen({config}) {
    const flashcard = useFlashcard(config)
return (
    <div>
        <Flashcard {...flashcard} config={config} />
    </div>
)
}
