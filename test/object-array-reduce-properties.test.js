"use strict";
import { should } from "chai";

import { objectArrayReduceProperties } from "../src/object-array-reduce-properties.js";

should();

const SIMPLEGRAPH = [
  { id: "timeToComplete" },
  { id: "Person" },
  { id: "costCurrency" },
  { id: "postalCodeRange" },
  { id: "birthPlace" },
];
const testTransformer = () => "found!";

describe("function | objectArrayReduceProperties", () => {
  it("reduces `SIMPLEGRAPH` with `testTransformer`", async () => {
    SIMPLEGRAPH.reduce(
      objectArrayReduceProperties(testTransformer),
      {},
    ).should.eql({
      Person: "found!",
      birthPlace: "found!",
      costCurrency: "found!",
      postalCodeRange: "found!",
      timeToComplete: "found!",
    });
  });
});
