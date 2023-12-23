"use strict";
import { should } from "chai";

import sortById from "../src/sort-by-id.js";

should();

const SIMPLEGRAPH = [
  { id: "timeToComplete" },
  { id: "Person" },
  { id: "costCurrency" },
  { id: "postalCodeRange" },
  { id: "birthPlace" },
];
describe("function | sortById", () => {
  it("sorts `SIMPLEGRAPH`", async () => {
    SIMPLEGRAPH.sort(sortById)
      .map((p) => p.id)
      .should.eql([
        "Person",
        "birthPlace",
        "costCurrency",
        "postalCodeRange",
        "timeToComplete",
      ]);
  });
});
