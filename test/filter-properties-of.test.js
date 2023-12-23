"use strict";
import { should } from "chai";
import { readJsonFileRelatively } from "../utils/index.js";

import filterPropertiesOf from "../src/filter-properties-of.js";

should();

describe("function | filterPropertiesOf", () => {
  it("filtered `tinyUniverse` properties of `Cosmos`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse-simplified-20231222.json",
    );
    graph
      .filter(filterPropertiesOf({ id: "Cosmos" }))
      .map((p) => p.id)
      .should.eql(["size"]);
  });
  it("filtered `schemaorgv9.0` properties of `Thing`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    graph
      .filter(filterPropertiesOf({ id: "Thing" }))
      .map((p) => p.id)
      .should.eql([
        "potentialAction",
        "identifier",
        "sameAs",
        "url",
        "image",
        "alternateName",
        "name",
        "description",
        "mainEntityOfPage",
        "disambiguatingDescription",
        "subjectOf",
        "additionalType",
      ]);
  });
});
