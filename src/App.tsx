import { Deck } from "@/deck/Deck";
import { DeckProvider } from "@/deck/DeckProvider";

export default function App() {
  return (
    <DeckProvider>
      <Deck />
    </DeckProvider>
  );
}
