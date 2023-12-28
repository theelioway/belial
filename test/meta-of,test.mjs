"use strict";
import { should } from "chai";

import metaOf from "../src/meta-of.js";

should();

describe("function | metaOf", () => {
  it("returns the meta stuff from a graph", async () => {
    const SIMPLEGRAPH = [
      {
        id: "numberOfAxles",
        type: ["Property"],
        comment: "The number of axles.<br/><br/>\n\nTypical unit code(s): C62",
        domainIncludes: ["Vehicle"],
        rangeIncludes: ["Number", "QuantitativeValue"],
      },
    ];
    SIMPLEGRAPH.map(metaOf).should.eql([
      {
        type: ["Property"],
        domainIncludes: ["Vehicle"],
        rangeIncludes: ["Number", "QuantitativeValue"],
      },
    ]);
  });
});
