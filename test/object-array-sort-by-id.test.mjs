"use strict";
import { should } from "chai";

import objectArraySortById from "../src/object-array-sort-by-id.js";

should();

const SIMPLEGRAPH = [
  { id: "timeToComplete" },
  { id: "Person" },
  { id: "costCurrency" },
  { id: "postalCodeRange" },
  { id: "birthPlace" },
];
describe("function | objectArraySortById", () => {
  it("sorts `SIMPLEGRAPH`", async () => {
    SIMPLEGRAPH.sort(objectArraySortById)
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
