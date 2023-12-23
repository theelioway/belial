"use strict";
import { should } from "chai";
import { readJsonFileRelatively } from "../utils/index.js";

import reduceAncestorClassesOf from "../src/reduce-ancestor-classes-of.js";

should();

describe("function | reduceAncestorClassesOf", () => {
  it("reduces `tinyUniverse` ancestor classes of `Cosmos`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse-simplified-20231222.json",
    );
    graph.reduce(reduceAncestorClassesOf({ id: "Cosmos" }), []).should.eql([]);
  });
  it("reduces `schemaorgv9.0` ancestor classes of `RsvpAction`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    graph
      .reduce(
        reduceAncestorClassesOf({
          id: "RsvpAction",
          subClassOf: ["InformAction"],
        }),
        [],
      )
      .map((p) => p.id)
      .sort()
      .should.eql([
        "Action",
        "CommunicateAction",
        "InformAction",
        "InteractAction",
        "Thing",
      ]);
  });
});
