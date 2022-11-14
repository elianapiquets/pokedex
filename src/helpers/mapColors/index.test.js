import { mapColor } from ".";

describe("When using mapColor()", () => {
  it("Get color in list and returns hex.", () => {
    const color = mapColor("black");
    expect(color).toEqual("#2E2E2E");
  });
  it("Get color NOT in list and returns color.", () => {
    const color = mapColor("bla");
    expect(color).toEqual(color);
  });
});
