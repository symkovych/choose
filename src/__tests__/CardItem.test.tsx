import { screen } from "@testing-library/react";
import { dummyCardsData } from "../constans";
import CardItem from "../components/CardItem";
import { render } from "../test-utils";

const dummyCardItem = dummyCardsData[0];
const calculatedDescription = "Countries 8, Days 21";

test("CardItem component", async () => {
  render(<CardItem {...dummyCardItem} />);
  const title = screen.getByText(dummyCardItem.name);
  const description = screen.getByText(calculatedDescription);

  expect(title).toBeVisible();
  expect(description).toBeVisible();
});
