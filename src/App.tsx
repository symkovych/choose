import { useEffect, useState } from "react";
import "./App.css";
import Cards, { Card } from "./components/Cards";

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchCards = async () => {
      setLoading(true);
      try {
        const response = await fetch("/fetchCards");
        const json: Card[] = await response.json();
        setCards(json);
      } catch (_e) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    handleFetchCards();
  }, []);

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <header></header>
      <main>{<Cards cards={cards} />}</main>
    </div>
  );
}

export default App;
