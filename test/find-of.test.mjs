"use strict";
import { should } from "chai";

import findOf from "../src/find-of.js";

should();

const SIMPLEGRAPH = [
  { id: "timeToComplete", val: "timeToComplete expected" },
  { id: "Airline", val: "Airline expected" },
  { id: "costCurrency", val: "costCurrency expected" },
  { id: "postalCodeRange", val: "postalCodeRange expected" },
  { id: "birthPlace", val: "birthPlace expected" },
];

describe("function | findOf", () => {
  it("finds a thing matching id in `SIMPLEGRAPH`", async () => {
    SIMPLEGRAPH.find(findOf({ id: "timeToComplete" })).should.eql({
      id: "timeToComplete",
      val: "timeToComplete expected",
    });
    SIMPLEGRAPH.find(findOf({ id: "costCurrency" })).should.eql({
      id: "costCurrency",
      val: "costCurrency expected",
    });
  });
  it("handles no match `undefined` in `SIMPLEGRAPH`", async () => {
    should().equal(SIMPLEGRAPH.find(findOf({ id: "no match" })), undefined);
  });
});
