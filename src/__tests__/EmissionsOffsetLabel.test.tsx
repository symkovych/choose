import { screen } from "@testing-library/react";
import { dummyCardsData } from "../constans";
import { EmissionsOffsetLabel } from "../components/CardItem/EmissionsOffsetLabel";
import { render } from "../test-utils";

const dummyCardItem = dummyCardsData[0];
const calculatedtext1 = "810 kg";
const calculatedtext2 = "3.56 t";

test("EmissionsOffsetLabel component kg unit", async () => {
  render(
    <EmissionsOffsetLabel emissionOffest={dummyCardItem.emissionsOffset} />
  );
  const text = screen.getByText(calculatedtext1);

  expect(text).toBeVisible();
});

test("EmissionsOffsetLabel component ton unit", async () => {
  render(
    <EmissionsOffsetLabel emissionOffest={dummyCardsData[1].emissionsOffset} />
  );
  const text = screen.getByText(calculatedtext2);

  expect(text).toBeVisible();
});
