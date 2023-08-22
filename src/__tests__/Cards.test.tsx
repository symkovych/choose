/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import Cards from "../components/Cards";
import { TestIDs, dummyCardsData } from "../constans";
import { render } from "../test-utils";

test("Cards component", async () => {
  render(<Cards cards={dummyCardsData} />);
  const cards = screen.getByTestId(TestIDs.CARDS);
  expect(cards.childElementCount).toEqual(dummyCardsData.length);
});
