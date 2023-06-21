import twoOldestAges from "./skeleton";

test("basic tests", () => {
  expect(twoOldestAges([3, 27, 4, 89, 21, 5])).toStrictEqual([27, 89]);
  expect(twoOldestAges([3, 27, 21, 5])).toStrictEqual([21, 27]);
  expect(twoOldestAges([3, 5])).toStrictEqual([3, 5]);
});
