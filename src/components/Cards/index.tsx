import { SimpleGrid } from "@chakra-ui/react";
import CardItem from "../CardItem";
import { memo } from "react";

export type Card = {
  name: string;
  countriesNumber: number;
  duration: number;
  emissionsOffset: number;
  raiting: number;
  imageSrc: string;
  id: number;
};

type CardsProps = {
  cards: Card[] | [];
};

function Cards({ cards }: CardsProps) {
  if (cards.length === 0) return null;
  return (
    <SimpleGrid
      minChildWidth="400px"
      spacing="10"
      backgroundColor={"gray.300"}
      py="10"
      px="5"
      data-testid="cards"
    >
      {cards.map((card) => (
        <CardItem key={card.name} {...card} />
      ))}
    </SimpleGrid>
  );
}

export default memo(Cards);
